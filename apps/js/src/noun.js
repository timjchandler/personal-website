export class Noun {
    constructor(word, der, die, das, plural, definition) {
    this.word = word;
    this.der = der;
    this.die = die;
    this.das = das;
    this.plural = plural;
    this.definition = definition;
    }
}

export function readSource(csv) {
    let words = [];
    csv = csv.split(':');  
    for (let idx = 0; idx < csv.length; ++idx) {
        csv[idx] = csv[idx].split(',');
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
            words.push(noun);
        }
    }
    return words;
}