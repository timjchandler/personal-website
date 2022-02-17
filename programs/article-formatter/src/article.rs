pub mod body;

use std::fs::File;
use std::io::*;
use body::Body;

pub struct Article {
    path: String,
    title: String,
    date: String,
    img: String,
    alt: String,
    body: Vec<Body>,
}

impl Article {
    pub fn new(path: String) -> Article {
        let body: Vec<Body> = Vec::new();
        Article {
            path: path,
            title: "TITLE".to_owned(),
            date: "DATE".to_owned(),
            img: "IMAGE PATH".to_owned(),
            alt: "ALT TEXT".to_owned(),
            body: body,
        }
    }

    pub fn set_title(&mut self, title: String) {
        self.title = format!("            {}", title);
    }
    pub fn set_date(&mut self, date: String) {
        self.date = format!("            {}", date);
    }
    pub fn set_img(&mut self, img: String) {
        self.img = format!("            src=\"{}\"", img);
    }
    pub fn set_alt(&mut self, alt: String) {
        self.alt = format!("            alt=\"{}\"", alt);
    }
    pub fn set_body(&mut self, body: String) {
        self.body.push(Body::new(body));
    }
    pub fn get_full(&mut self) -> String {
        let mut output: String = "".to_owned();
        let file = File::open(&*self.path).unwrap();
        let reader = BufReader::new(file);

        for line in reader.lines() {
            let unwrapped = &*line.unwrap();
            if unwrapped.contains("...") {
                self.format_output(unwrapped, &mut output);
            } else {
                output.push_str(unwrapped);
            }
            output.push_str("\n");
        }
        return output;
    }
    
    fn format_body(&mut self) -> String {
        let mut out: String = "".to_owned();
        for item in &mut self.body {
            let body_seg: String = item.get_full();
            out.push_str(&*body_seg);
        }
        return out;
    }

    fn format_output(&mut self, unwrapped: &str, output: &mut String) {
        let split = unwrapped.split("...").collect::<Vec<&str>>();
        match split[1] {
            "title" => output.push_str(&*self.title),
            "date"  => output.push_str(&*self.date),
            "img"   => output.push_str(&*self.img),
            "alt"   => output.push_str(&*self.alt),
            "body"  => output.push_str(&*self.format_body()),
            _       => panic!("ERROR :: Issue parsing {}", self.path),
        }
    }

}