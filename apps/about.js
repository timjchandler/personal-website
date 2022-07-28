const aboutEng = "The translations to English were sourced from <a href=\"https://www.deepl.com/translator\">DeepL Translator</a>. All spelling mistakes are my own.<br><br>If you notice any spelling mistakes, or have any other feedback, please feel free to contact me <a href=\"contact.html\">here</a>."
const aboutGer = "Die Übersetzungen ins Englische stammen von <a href=\"https://www.deepl.com/translator\">DeepL Translator</a>. Die Rechtschreibfehler sind von mir.<br><br>Wenn Sie Rechtschreibfehler oder andere Probleme bemerken, lassen Sie es mich bitte <a href=\"contact.html\">hier</a> wissen."

let aboutHidden = false;

addAbout();

function generateElement(elementType, styleClass=null, innerText=null) {
    let element = document.createElement(elementType);
    if (styleClass != null) element.classList.add(styleClass);
    if (innerText != null) element.innerHTML = innerText;
    return element;
}

function addAbout() {
    let text = [aboutGer, aboutEng];
    let about = document.getElementById("about");
    about.appendChild(generateElement('h2', 'about-title', 'About'));
    let showHide = generateElement('h3', 'show-hide', 'show/hide')
    showHide.addEventListener("click", showHideAbout);
    about.appendChild(showHide)
    
    if (aboutHidden) return;

    let innerAbout = generateElement('div', 'about');
    for (let idx = 0; idx < 2; ++idx) 
        innerAbout.appendChild(generateElement('div', 'about-sec', text[idx])); 
    
    about.appendChild(innerAbout);
}

function showHideAbout() {
    while (about.lastChild) document.getElementById('about').removeChild(about.lastChild);
    aboutHidden = !aboutHidden;
    addAbout();
}

