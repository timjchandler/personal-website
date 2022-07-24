class Noun {
    constructor(word, der, die, das, plural, definition) {
    this.word = word;
    this.der = der;
    this.die = die;
    this.das = das;
    this.plural = plural;
    this.definition = definition;
    }
}

const redColour = "#c92a2a"
const defBtnColour = "#463f3a"
const defHovColour = "#8a817c"
const greenColour = "#74b816"

// let csv = "abfall,1,,,abfälle,rubbish;waste;refuse:abitur,,,1,,high school graduation; high school diploma:abschluss,1,,,abschlüsse,closing;conclusion:absicht,,1,,absichten,intention;intent;purpose::agentur,,1,,agenturen,agency;agent::ahnung,,1,,ahnungen,inkling;clue";
let csv = "abfall,1,,,abfälle,rubbish;waste;refuse:abitur,,,1,,high school graduation; high school diploma:abschluss,1,,,abschlüsse,closing;conclusion:absicht,,1,,absichten,intention;intent;purpose:agentur,,1,,agenturen,agency;agent:ahnung,,1,,ahnungen,inkling;clue:aktivität,,1,,aktivitäten,activity:alkohol,1,,,,alcohol:alltag,1,,,,everyday life;everyday:anfang,1,,,anfänge,beginning;start:angst,,1,,ängste,fear;anxiety:appetit,1,,,,appetite:arbeitgeber,1,,,arbeitgeber,employer:arbeitgeberin,,1,,arbeitgeberinnen,employer:arbeitnehmer,1,,,arbeitnehmer,employee;worker:arbeitnehmerin,,1,,arbeitnehmerinnen,employee;worker:arbeitstag,1,,,arbeitstage,workday;working day:art,,1,,arten,art;type;kind:aufzug,1,,,aufzüge,elevator:aushang,1,,,aushänge,notice;posting:ausbildende,1,1,,ausbildenden,educator;training:azubi,1,1,,azubis,apprentice;trainee:baby,,,1,babys,baby:bäcker,1,,,bäcker,baker:bäckerin,,1,,bäckerinnen,baker:beginn,1,,,beginne,start;beginning:beitrag,1,,,beiträge,contribution;article:beratung,,1,,beratungen,consultation;advice:berufsschule,,1,,berufsschulen,vocational school:besprechung,,1,,besprechungen,review;discussion;meeting:bestätigung,,1,,bestätigungen,confirmation;acknowledgement:besuch,1,,,besuche,visit:betrieb,1,,,betriebe,operating:betriebsrat,1,,,betriebsräte,operating board:bewegung,,1,,bewegungen,movement;motion:bewohner,1,,,bewohner,resident;inhabitant:bewohnerin,,1,,bewohnerinnen,resident;inhabitant:bierkrug,1,,,bierkrüge,beer mug:bild,,,1,bilder,image;picture:bildschirm,1,,,bildschirme,screen;monitor:biologie,,1,,,biology:bitte,,1,,bitten,please:braten,1,,,,fry;roast:briefkasten,1,,,briefkästen,mailbox;letterbox:briefmarke,,1,,briefmarken,stamp;postage stamp:chemie,,1,,,chemistry:cousin,1,,,cousins,cousin:cousine,,1,,cousinen,cousin:creme,,1,,cremes,cream;creme:curry,,,1,,curry:dach,,,1,dächer,roof:dank,1,,,,thank:decke,,1,,decken,ceiling;cover:diät,,1,,diäten,diet:durchschnitt,1,,,durchschnitte,average:einfahrt,,1,,einfahrten,driveway;entrance:einführung,,1,,einführungen,introduction:einkauf,1,,,einkäufe,purchase:einzug,1,,,einzüge,move in:energie,,1,,energien,energy:entlassung,,1,,entlassungen,release;discharge;dismissal:entspannung,,1,,,relaxation;recreation:erdkunde,,1,,,earth science;geography"

let words = []
let history = []
let currentWord = null
let quizStarted = false
let correctAnswers = 0
let incorrectAnswers = 0
let wrongThisRound = false;
// let pushed = false;

setup()
// roll()
// updateScreen()

document.getElementById("main-word").addEventListener("click", clickedWord);
document.getElementById("der").addEventListener("click", clickedDer);
document.getElementById("die").addEventListener("click", clickedDie);
document.getElementById("das").addEventListener("click", clickedDas);

function buildTrace() {
    trace = document.getElementById("trace");
    while (trace.lastChild) trace.removeChild(trace.lastChild);
    for (let idx = history.length - 1; idx >= 0; idx--) {
        var element = document.createElement('div');
        element.classList.add('trace-element');
        element.classList.add('trace-' + (idx - history.length + 1) * -1);

        var articles = document.createElement('h3');
        articles.innerHTML = getArticles(history[idx]);
        articles.classList.add('article-element');

        var word = document.createElement('h3');
        word.innerHTML = history[idx].word;
        word.classList.add('word-element');

        var plural = document.createElement('h3');
        plural.innerHTML = history[idx].plural == '' ? '(meist) nur im Singular' : history[idx].plural;
        plural.classList.add('plural-element')
        
        var definition = document.createElement('h3');
        definition.innerHTML = getDefinition(history[idx]);
        definition.classList.add('definition-element')

        element.appendChild(articles);
        element.appendChild(word);
        element.appendChild(plural);
        element.appendChild(definition);
        // element.appendChild(document.createTextNode('hello ' + idx));
        trace.appendChild(element);
    }
}

function getDefinition(noun) {
    let text = '';
    for (let idx = 0; idx < noun.definition.length; ++idx) {
        text += noun.definition[idx];
        if (idx < noun.definition.length - 1) text += '<br>';
    }
    return text;
}

function getArticles(noun) {
    let articles = '';
    if (noun.der) articles = 'der';
    if (noun.die) {
        if (articles == '') articles = 'die';
        else articles += "<br>die";
    }
    if (noun.das) {
        if (articles == '') articles = 'das';
        else articles += "<br>das";
    }
    return articles
}

function correctAnswer(article) {
    wrongThisRound = false;
    ++correctAnswers;
    setColor('--word-area', greenColour);
    updateColors(article, greenColour, greenColour);
    setTimeout(roll, 1000);
}

function wrongAnswer(article) {
    if (!wrongThisRound) ++incorrectAnswers;
    wrongThisRound = true
    updateColors(article, redColour, redColour)
}


function clickedDer() { 
    if (currentWord.der) correctAnswer('der')
    else wrongAnswer('der')
}

function clickedDie() { 
    if (currentWord.die) correctAnswer('die')
    else wrongAnswer('die')
}

function clickedDas() { 
    if (currentWord.das) correctAnswer('das')
    else wrongAnswer('das')
}

function showScore() {
    let scoreText = "aktuelle Punktzahl: ";
    if (correctAnswers == 0 && incorrectAnswers == 0) 
        scoreText = "Wahlen sie den richtigen Artikel aus";
    else {
        let score = correctAnswers / (correctAnswers + incorrectAnswers);
        scoreText += Math.floor(score * 100) + "%";
    }
    document.getElementById("score").innerHTML = scoreText;
}

function clickedWord() {
    if (quizStarted) return;
    roll();
    updateScreen();
    showScore();
    quizStarted = true;
}

function setColor(name, color) {
    document.documentElement.style.setProperty(name, color)
}

function updateColors(article, colorA = defBtnColour, colorB = defHovColour) {
    setColor('--' + article + '-button', colorA);
    setColor('--' + article + '-hover', colorB);
}

function updateScreen() {
    for (let idx = 0; idx < 3; ++idx) updateColors(['der', 'die', 'das'][idx]);
    setColor('--word-area', '#353535');
    document.getElementById("current-word").innerHTML = currentWord.word
    showScore();
    buildTrace();
}

function roll() {
    let value = Math.floor(Math.random() * words.length);
    if (isInHistory(value) || currentWord === words[value]) return roll();
    if (history.length >= 5) history.shift();
    if (currentWord != null) history.push(currentWord);
    currentWord = words[value];
    updateScreen();
}

function isInHistory(roll) {
    for (let idx = 0; idx < history.length; ++idx) {
        if (history[idx] === words[roll]) return true
    }
    return false
}

function setup() {
    csv = csv.split(':')
    
    for (let idx = 0; idx < csv.length; ++idx) {
        csv[idx] = csv[idx].split(',')
    }
    
    for (let idx = 0; idx < csv.length; ++idx) {
        if (csv[idx].length == 6) {
            let word = csv[idx][0].charAt(0).toUpperCase() + csv[idx][0].slice(1);
            let der = csv[idx][1] == '1' ? true : false;
            let die = csv[idx][2] == '1' ? true : false;
            let das = csv[idx][3] == '1' ? true : false;
            let plural = csv[idx][4].charAt(0).toUpperCase() + csv[idx][4].slice(1);
            let definition = csv[idx][5].split(';')
            let noun = new Noun(word, der, die, das, plural, definition);
            words.push(noun)
        }
    }
}

