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
// let csv = "abfall,1,,,abfälle,rubbish;waste;refuse:abitur,,,1,,high school graduation; high school diploma:abschluss,1,,,abschlüsse,closing;conclusion:absicht,,1,,absichten,intention;intent;purpose:agentur,,1,,agenturen,agency;agent:ahnung,,1,,ahnungen,inkling;clue:aktivität,,1,,aktivitäten,activity:alkohol,1,,,,alcohol:alltag,1,,,,everyday life;everyday:anfang,1,,,anfänge,beginning;start:angst,,1,,ängste,fear;anxiety:appetit,1,,,,appetite:arbeitgeber,1,,,arbeitgeber,employer:arbeitgeberin,,1,,arbeitgeberinnen,employer:arbeitnehmer,1,,,arbeitnehmer,employee;worker:arbeitnehmerin,,1,,arbeitnehmerinnen,employee;worker:arbeitstag,1,,,arbeitstage,workday;working day:art,,1,,arten,art;type;kind:aufzug,1,,,aufzüge,elevator:aushang,1,,,aushänge,notice;posting:ausbildende,1,1,,ausbildenden,educator;training:azubi,1,1,,azubis,apprentice;trainee:baby,,,1,babys,baby:bäcker,1,,,bäcker,baker:bäckerin,,1,,bäckerinnen,baker:beginn,1,,,beginne,start;beginning:beitrag,1,,,beiträge,contribution;article:beratung,,1,,beratungen,consultation;advice:berufsschule,,1,,berufsschulen,vocational school:besprechung,,1,,besprechungen,review;discussion;meeting:bestätigung,,1,,bestätigungen,confirmation;acknowledgement:besuch,1,,,besuche,visit:betrieb,1,,,betriebe,operating:betriebsrat,1,,,betriebsräte,operating board:bewegung,,1,,bewegungen,movement;motion:bewohner,1,,,bewohner,resident;inhabitant:bewohnerin,,1,,bewohnerinnen,resident;inhabitant:bierkrug,1,,,bierkrüge,beer mug:bild,,,1,bilder,image;picture:bildschirm,1,,,bildschirme,screen;monitor:biologie,,1,,,biology:bitte,,1,,bitten,please:braten,1,,,,fry;roast:briefkasten,1,,,briefkästen,mailbox;letterbox:briefmarke,,1,,briefmarken,stamp;postage stamp:chemie,,1,,,chemistry:cousin,1,,,cousins,cousin:cousine,,1,,cousinen,cousin:creme,,1,,cremes,cream;creme:curry,,,1,,curry:dach,,,1,dächer,roof:dank,1,,,,thank:decke,,1,,decken,ceiling;cover:diät,,1,,diäten,diet:durchschnitt,1,,,durchschnitte,average:einfahrt,,1,,einfahrten,driveway;entrance:einführung,,1,,einführungen,introduction:einkauf,1,,,einkäufe,purchase:einzug,1,,,einzüge,move in:energie,,1,,energien,energy:entlassung,,1,,entlassungen,release;discharge;dismissal:entspannung,,1,,,relaxation;recreation:erdkunde,,1,,,earth science;geography"
let csv = "abfall,1,,,abfälle,rubbish;waste;refuse:abitur,,,1,,high school graduation; high school diploma:abschluss,1,,,abschlüsse,closing;conclusion:absicht,,1,,absichten,intention;intent;purpose:agentur,,1,,agenturen,agency;agent:ahnung,,1,,ahnungen,inkling;clue:aktivität,,1,,aktivitäten,activity:alkohol,1,,,,alcohol:alltag,1,,,,everyday life;everyday:anfang,1,,,anfänge,beginning;start:angst,,1,,ängste,fear;anxiety:appetit,1,,,,appetite:arbeitgeber,1,,,arbeitgeber,employer:arbeitgeberin,,1,,arbeitgeberinnen,employer:arbeitnehmer,1,,,arbeitnehmer,employee;worker:arbeitnehmerin,,1,,arbeitnehmerinnen,employee;worker:arbeitstag,1,,,arbeitstage,workday;working day:art,,1,,arten,art;type;kind:aufzug,1,,,aufzüge,elevator:aushang,1,,,aushänge,notice;posting:ausbildende,1,1,,ausbildenden,educator;training:azubi,1,1,,azubis,apprentice;trainee:baby,,,1,babys,baby:bäcker,1,,,bäcker,baker:bäckerin,,1,,bäckerinnen,baker:beginn,1,,,beginne,start;beginning:beitrag,1,,,beiträge,contribution;article:beratung,,1,,beratungen,consultation;advice:berufsschule,,1,,berufsschulen,vocational school:besprechung,,1,,besprechungen,review;discussion;meeting:bestätigung,,1,,bestätigungen,confirmation;acknowledgement:besuch,1,,,besuche,visit:betrieb,1,,,betriebe,operating:betriebsrat,1,,,betriebsräte,operating board:bewegung,,1,,bewegungen,movement;motion:bewohner,1,,,bewohner,resident;inhabitant:bewohnerin,,1,,bewohnerinnen,resident;inhabitant:bierkrug,1,,,bierkrüge,beer mug:bild,,,1,bilder,image;picture:bildschirm,1,,,bildschirme,screen;monitor:biologie,,1,,,biology:bitte,,1,,bitten,please:braten,1,,,,fry;roast:briefkasten,1,,,briefkästen,mailbox;letterbox:briefmarke,,1,,briefmarken,stamp;postage stamp:chemie,,1,,,chemistry:cousin,1,,,cousins,cousin:cousine,,1,,cousinen,cousin:creme,,1,,cremes,cream;creme:curry,,,1,,curry:dach,,,1,dächer,roof:dank,1,,,,thank:decke,,1,,decken,ceiling;cover:diät,,1,,diäten,diet:durchschnitt,1,,,durchschnitte,average:einfahrt,,1,,einfahrten,driveway;entrance:einführung,,1,,einführungen,introduction:einkauf,1,,,einkäufe,purchase:einzug,1,,,einzüge,move in:energie,,1,,energien,energy:entlassung,,1,,entlassungen,release;discharge;dismissal:entspannung,,1,,,relaxation;recreation:erdkunde,,1,,,earth science;geography:ermäßigung,,1,,ermäßigungen,discount;reduction:ernährung,,1,,ernährungen,nutrition;diet:essen,,,1,essen,food;meal:experte,1,,,experten,expert:expertin,,1,,expertinen,expert:export,1,,,exporte,export:fabrik,,1,,fabriken,factory:fehler,1,,,fehler,error;mistake;fault:feierabend,1,,,feierabende,holiday;holiday evening:finale,,,1,finale,final:fitness,,1,,,fitness:förderung,,1,,förderungen,promotion;funding:forum,,,1,forem,forum:frage,,1,,fragen,question:frist,,1,,fristen,deadline;time limit:frucht,,1,,früchte,fruit:frühjahr,,,1,frühjahre,early years:gabel,,1,,gabeln,fork:gastgeber,1,,,gastgeber,host:gefühl,,,1,gefühle,feeling;emotion:gegenstand,1,,,gegenstände,object;subject;item:gehörschutz,1,,,gehörschutze,hearing protection;ear protection:geldbeutel,1,,,geldbeutel,wallet:geldbörse,,1,,geldbörsen,purse;wallet:geografie,,1,,,geography:gericht,,,1,gerichte,court:gesamtschule,,1,,gesamtschulen,comprehensive school:geschichte,,1,,,history:gewerkschaft,,1,,gewerkschaften,union;trade union:gewohnheit,,1,,gewohnheiten,habit;custom:gold,,,1,,gold:gutschein,1,,,gutscheine,voucher;coupon:gymnasium,,,1,gymnasien,high school:gymnastik,,1,,,gymnastics:handwerk,,,1,handwerke,craft;trade;handicraft:hauptschule,,1,,hauptschulen,high school:haushalt,1,,,haushalte,budget;household:heimat,,1,,heimaten,home;homeland:herz,,,1,herzen,heart:hochhaus,,,1,hochhäuser,skyscraper;high-rise:hof,1,,,höfe,yard;courtyard:honig,1,,,honige,honey:import,1,,,importe,import:industrie,,1,,industrien,industry:kanne,,1,,kannen,can;jug;pot:kantine,,1,,kantinen,canteen;cafeteria:katze,,1,,katzen,cat:kaufhaus,,,1,kaufhäuser,department store:kette,,1,,ketten,necklace;chain:kirche,,1,,kirchen,church:körper,1,,,körper,body:krankenkasse,,1,,krankenkassen,health insurance:krankheit,,1,,krankheiten,disease;illness;sickness:kugelschreiber,1,,,kugelschreiber,ballpoint pen:kündigung,,1,,kündigungen,notice;termination;cancellation;resignation:kunst,,1,,künst,art:löffel,1,,,löffel,spoon:lohn,1,,,löhne,wage;salary:lösung,,1,,lösungen,solution:luft,,1,,lüfte,air:lust,,1,,lüste,lust;desire;pleasure:mahlzeit,,1,,mahlzeiten,meal:mal,,,1,male,time:mannschaft,,1,,manschaften,team;crew:markt,1,,,märkte,market:marmelade,,1,,marmeladen,jam;marmelade:material,,,1,materialien,material:meister,1,,,meister,master:meisterin,,1,,meisterinnen,master:menge,,1,,mengen,quantity:mensch,1,,,menschen,human;man;human being:messer,,,1,messer,knife:mieter,1,,,mieter,tenant:mieterin,,1,,mieterinnen,tenant:mitglied,,,1,mitglieder,member:mittagessen,,,1,mitagessen,lunch:mitteilung,,1,,mitteilungen,communication:modernisierung,,1,,modernisierungen,modernisation:motto,,,1,mottos,motto;slogan;theme:müll,1,,,,garbage;trash;waste:mütze,,1,,mützen,cap;beanie;hat:nachbar,1,,,nachbarn,neighbour:nachbrarin,,1,,nachbarinnen,neighbour:nachspeise,,1,,nachspeisen,dessert:neffe,1,,,neffen,nephew:nichte,,1,,nichten,niece:note,,1,,noten,grade;score:nuss,,1,,nüsse,nut:onkel,1,,,onkel,uncle:panne,,1,,pannen,mishap;glitch;breakdown:papierkorb,1,,,papierkörbe,waste basket;paper bin:parfüm,,,1,parfüms,perfume;fragrance:pech,,,1,,bad luck;tough luck:pfanne,,1,,pfannen,pan;frying pan;skillet:pflanze,,1,,pflanzen,plant:physik,,1,,,physics:plan,1,,,pläne,plan:plastik,,1,,,plastic:platz,1,,,plätze,place:produkt,,,1,produkte,product:prozent,,,1,prozente,percent;percentage:prüfung,,1,,prüfungen,exam;audit;check:puppe,,1,,puppen,doll;puppet:recht,,,1,rechte,right;law:referat,,,1,referate,paper;presentation;lecture:regel,,1,,regeln,rule;regulation:rente,,1,,renten,pension:reservierung,,1,,reservierungen,reservation;booking:rind,,,1,rinder,cattle;beef:ruhe,,1,,,calm;rest;peace:saison,,1,,saisons,season:schachtel,,1,,schachteln,box:schauspieler,1,,,schauspieler,actor:schauspielerin,,1,,schauspielerinnen,actress;actor:schicht,,1,,schichten,layer:schild,,,1,schilder,sign;shield:schloss,,,1,schlösser,castle:schüssel,,1,,schüsseln,bowl;dish:schutz,1,,,,protection:schwager,1,,,schwager,brother in law:schwägerin,,1,,schwaägerinnen,sister in law:schwein,,,1,schweine,pig;swine:seminar,,,1,seminare,seminar:sicherheit,,1,,sicherheiten,safety;security:sozialkunde,,1,,,social studies:spaziergang,1,,,spaziergänge,walk;stroll:spielplatz,1,,,spielplätze,playground:sportart,,1,,sportarten,sport:stift,1,,,stifte,pen;pencil:stimmung,,1,,stimmungen,mood:strecke,,1,,strecken,route;track;course:stück,,,1,stücke,piece;chunk:studium,,,1,,study;studies:suppe,,1,,suppen,soup:system,,,1,systeme,system:tagesablauf,1,,,tagesabläufe,daily routine;daily schedule:tante,,1,,tanten,aunt:tanz,1,,,tänze,dance:tarif,1,,,tarife,tariff;rate:tasse,,1,,tassen,cup;mug:technik,,1,,techniken,technology;technique:teilnehmer,1,,,teilnehmer,participant:teilnehmerin,,1,,teilnehmerinnen,participant:teller,1,,,teller,plate:theater,,,1,theater,theater:theorie,,1,,theorien,theory:tipp,1,,,tipps,tip;hint:tod,1,,,tode,death:topf,1,,,töpfe,pot;saucepan:torte,,1,,torten,cake;pie;tart:trauung,,1,,trauungen,wedding ceremony:treppe,,1,,treppen,stairs;staircase:trinkgeld,,,1,trinkgelder,tip;tipping:überstunde,,1,,überstunden,overtime:umgebung,,1,,umgebungen,environment:umwelt,,1,,,environment:umzug,1,,,umzüge,relocation;move:unterhaltung,,1,,unterhaltungen,entertainment:untersuchung,,1,,untersuchungen,investigation;examination;survey:ursache,,1,,ursachen,cause:veranstaltung,,1,,veranstaltungen,event:verein,1,,,vereine,association;club;society:versammlung,,1,,versammlungen,meeting;assembly;convention:verständnis,,,1,verständnisse,understanding:versuch,1,,,versuche,try;attempt;trial:vertrag,1,,,verträge,contract:vorbereitung,,1,,vorbereitungen,preparation:vorschrift,,1,,vorschriften,regulation:vorsicht,,1,,,caution:vorspeise,,1,,vorspeisen,appetiser;hors d'oeuvre;starter:vortrag,1,,,vorträge,lecture;talk;presentation:wand,,1,,wände,wall:wecker,1,,,wecker,alarm clock:weiterbildung,,1,,weiterbildungen,further education:wunsch,1,,,wünsche,wish;desire:zeitschrift,,1,,zeitschriften,magazine;journal:zentrum,,,1,zentren,center:zertifikat,,,1,zertifikate,certificate:zettel,1,,,zettel,note:zeugnis,,,1,zeugnisse,testimonial;report card:zitrone,,1,,zitronen,lemon"

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

