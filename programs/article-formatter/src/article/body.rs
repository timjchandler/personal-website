pub struct Body {
    text: String,
    footer: String,
}

impl Body {
    pub fn new(full: String) -> Body {
        let split = full.split("[END]").collect::<Vec<&str>>();

        Body {
            text: split[0].to_owned(),
            footer: split[1].to_owned(),
        }
    }

    pub fn get_full(&mut self) -> String {
        let mut out: String = "        <p>".to_owned();
        out.push_str(&*self.text);
        out.push_str("</p>\n        <p class=\"footnote\">");
        out.push_str(&*self.footer);
        out.push_str("</p>");
        return out
    }
}