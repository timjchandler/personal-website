const der = [
    "abfall",
    "abschluss",
    "alkohol",
    "alltag",
    "anfang",
    "appetit",
    "arbeitnehmer",
    "arbeitstag",
    "astronaut",
    "aufzug",
    "backer",
    "basketball",
    "beginn",
    "beitrag",
    "besuch",
    "betreib",
    "betreibsrat",
    "bierkrug",
    "bildschirm",
    "breifkasten"
]

const die = [
    "absicht",
    "agentur",
    "ahnung",
    "aktivität",
    "angst",
    "arbeitnehmerin",
    "art",
    "astronautin",
    "backerin",
    "beratung",
    "berufsschule",
    "besprechung",
    "bestätigung",
    "bewegung",
    "biologie",
    "bitte",
    "breifmarke",
    "chemie",
]

const das = [
    "abitur",
    "baby",
    "bild"
]

const diepl = [
    "abfälle",
    "abschlüsse",
    "agenturen",
    "ahnungen",
    "aktivitäten",
    "anfänge",
    "ängste",
    "arbeitstage",
    "arten",
    "astronauten",
    "aufzüge",
    "backeren",
    "beginne",
    "beiträge",
    "beratungen",
    "berufsschulen",
    "besprechungen",
    "bestätigungen",
    "besuche",
    "betreibe",
    "betreibsräte",
    "bewegungen",
    "bierkrüge",
    "bilder",
    "bildschirme",
    "bitten",
    "breifkästen",
    "breifmarken",
]


// TODO: Add option to turn off plural words

const derLen = der.length;
const dieLen = die.length; 
const dasLen = das.length;
const dieplLen = diepl.length;

const defBtnClr = getComputedStyle(document.documentElement)
                    .getPropertyValue('--default-button');
const defHovClr = getComputedStyle(document.documentElement)
                    .getPropertyValue('--default-hover');                    
const defWrdClr = getComputedStyle(document.documentElement)
                    .getPropertyValue('--default-word');

let history = [];
let started = 0;
let current = -1;

let correctAnswers = 0;
let wrongAnswers = 0;
let wrongThisTurn = false;

let usingPlurals = true;

                    
function setWord() {
    word = roll();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    wrongThisTurn = false;
    document.getElementById("current-word").innerHTML = word
}

function roll() {
    initialRoll = Math.random();
    totalWords = derLen + dieLen + dasLen;
    if (usingPlurals) totalWords += dieplLen;
    threshold = derLen / totalWords
    if (threshold > initialRoll) return rollHelper(der, 0);
    threshold += dieLen / totalWords;
    if (threshold > initialRoll) return rollHelper(die, 1);
    threshold += dasLen / totalWords;
    if (threshold > initialRoll) return rollHelper(das, 2);
    return rollHelper(diepl, 3); 
}

function rollHelper(array, curr) {
    current = curr;
    return array[Math.floor(Math.random() * array.length)]
}

function start() {
    if (started == 0) {
        started = 1;
        setWord();
    }
}

function derClick() { processClick(0); }
function dieClick() { processClick(1); }
function dasClick() { processClick(2); }
function dieplClick() { processClick(3); }

function setColor(name, color) {
    document.documentElement.style.setProperty(name, color)
}

function processClick(value) {
    console.log('Click: ' + value + ' Correct: ' + current);
    if (value == current) {
        setColor('--default-word', '#74b816');
        setTimeout(nextWord, 1000);
    } else {
        if (value == 0) updateColors('der');
        if (value == 1) updateColors('die');
        if (value == 2) updateColors('das');
        if (value == 3) updateColors('diepl');
    }
}

function updateColors(article, colorA = '#c92a2a', colorB = '#c92a2a') {
    wrongThisTurn = true;
    setColor('--' + article, colorA);
    setColor('--' + article + '-hover', colorB);
}

function nextWord() {
    let score = 100
    ++correctAnswers ;
    if (wrongThisTurn) ++wrongAnswers;
    wrongThisTurn = false;
    if (wrongAnswers != 0) 
        score = Math.floor(100 * correctAnswers / (correctAnswers + wrongAnswers));
    document.getElementById("score-area").innerHTML = ('Current Score:\t' + score + '%'); 
    resetColors();
    setWord()
}

function resetColors() {
    articles = ['der', 'die', 'das', 'diepl'];
    for (let idx = 0; idx < 4; ++idx) {
        updateColors(articles[idx], defBtnClr, defHovClr);
        console.log(articles[idx])
    }
    setColor('--default-word', defWrdClr);
}
