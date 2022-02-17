pub mod article;
use article::Article;

fn main() {
    let mut article: Article = Article::new("structure/structure.txt".to_owned());
    article.set_title("this is a title".to_owned());
    article.set_date("43rd Febtember, 2432".to_owned());
    article.set_img("path.type".to_owned());
    article.set_alt("this is some alt text".to_owned());
    article.set_body("Body body body body body[END]footer".to_owned());
    println!("{}", article.get_full());
}