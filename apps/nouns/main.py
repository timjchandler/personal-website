from ast import parse
from flask import Flask, render_template, request
from wordquiz import Question, RNG, Parser

app = Flask('__name__')

@app.route("/")
def quiz():
    # return 'Hello World!'
    parser = Parser('words.csv')
    parser.parse_words()

    print(len(parser.words))

    rng = RNG(5, len(parser.words))
    question = Question(parser.words)

    word = question.get_word(rng.roll_number())

    return render_template('nouns.html', word=word)



