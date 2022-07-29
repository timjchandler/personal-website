import { readSource } from "./src/noun.js";
import { buildTrace } from "./src/trace.js";
import { Colours, MessageText } from "./src/strings.js";
import { csv } from "./src/wordlist.js";

let words = readSource(csv);
let history = [];
let currentWord = null;
let quizStarted = false;
let correctAnswers = 0;
let incorrectAnswers = 0;
let wrongThisRound = false;

[ 
    [ 'main-word', clickedWord ], 
    [ 'der', clickedDer ], 
    [ 'die', clickedDie ], 
    [ 'das', clickedDas ]
].forEach(function(item) {
    document.getElementById(item[0]).addEventListener("click", item[1]);
});

function correctAnswer(article) {
    wrongThisRound = false;
    ++correctAnswers;
    setColor('--word-area', Colours.green);
    updateColors(article, Colours.green, Colours.green);
    setTimeout(roll, 1000);
}

function wrongAnswer(article) {
    if (!wrongThisRound) ++incorrectAnswers;
    wrongThisRound = true
    updateColors(article, Colours.red, Colours.red)
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
    let scoreText = correctAnswers + MessageText.scorePl;
    if (correctAnswers == 1) scoreText = MessageText.scoreSg; 
    if (correctAnswers == 0 && incorrectAnswers == 0) 
        scoreText = MessageText.scoreIn; 
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

function updateColors(article, colorA = Colours.btn, colorB = Colours.hov) {
    setColor('--' + article + '-button', colorA);
    setColor('--' + article + '-hover', colorB);
}

function updateScreen() {
    ['der', 'die', 'das'].forEach(function(article) {updateColors(article)});
    setColor('--word-area', Colours.grey);
    document.getElementById("current-word").innerHTML = currentWord.word
    showScore();
    buildTrace(history, "trace");
}

function roll() {
    let value = Math.floor(Math.random() * words.length);
    if (isInHistory(value) || currentWord === words[value]) return roll();
    if (history.length >= 5) history.pop();
    if (currentWord != null) history.unshift(currentWord);
    currentWord = words[value];
    updateScreen();
}

function isInHistory(roll) {
    for (let idx = 0; idx < history.length; ++idx) 
        if (history[idx] === words[roll]) return true;
    return false;
}