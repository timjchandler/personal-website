export function buildTrace(words, areaID) {
    let trace = document.getElementById(areaID);
    while (trace.lastChild) trace.removeChild(trace.lastChild);
    for (let idx = 0; idx < words.length; ++idx) {
        var element = makeElement(null, ['trace-element', 'word-list']);
        [ 
            [ getArticles(words[idx]), [ 'article-element' ] ],
            [ words[idx].word, [ 'word-element' ] ],
            [ words[idx].plural == '' ? '(meist) nur im Singular' : words[idx].plural,
                [ 'plural-element' ] ],
            [ getDefinition(words[idx]), [ 'definition-element' ] ] 
        ].forEach(function(param) {
            element.appendChild(makeElement(param[0], param[1]));
        });
        trace.appendChild(element);
    }
}

function makeElement(inner, classList, type='h3') {
    var element = document.createElement(type);
    if (inner != null)
        element.innerHTML = inner;
    classList.forEach(function(item) {
        element.classList.add(item)
    })
    return element;
}

function getArticles(noun) {
    let articles = '';
    if (noun.der) articles = 'der';
    if (noun.die) articles += articles == '' ? 'die' : '<br>die';
    if (noun.das) articles += articles == '' ? 'das' : '<br>das';
    return articles
}

function getDefinition(noun) {
    let text = '';
    for (let idx = 0; idx < noun.definition.length; ++idx) {
        text += noun.definition[idx];
        if (idx < noun.definition.length - 1) text += '<br>';
    }
    return text;
}