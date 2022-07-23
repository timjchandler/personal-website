import random

class Parser():
    '''
    Read in the words from the csv file and parse them into a
    dictionary containing the words with der/die/das/die(pl) as 
    appropriate
    '''

    def __init__(self, filepath):
        '''
        Define the lines and words variables, read in the
        csv file

        args:
            filepath    (string):   The location of the csv file
        '''
        self._lines = []
        self.words = {}

        with open(filepath) as f:
            self._lines = f.readlines()

    def parse_words(self):
        '''
        Parse the csv filling a dictionary with words and their
        appropriate pronoun
        '''
        for line in self._lines:
            split = line.split(',')
            if split[0] != '':
                self.words[split[0].capitalize()] = 'der'
            if split[1] != '':
                self.words[split[1].capitalize()] = 'die'
            if split[2] != '':
                self.words[split[2].capitalize()] = 'das'
            if split[3][:-1] != '':
                self.words[split[3][:-1].capitalize()] = 'die-pl'

class RNG():
    '''
    Uses the random library to generate random integers without 
    repetition based on a defined memory variable
    '''

    def __init__(self, memory, word_count):
        '''
        args:
            memory      (int):  The number of previous rolls to avoid repeating
            word_count  (int):  The maximum number to roll
        '''
        self.memory = memory
        self.word_count = word_count
        self.past_rolls = []

    def roll_number(self):
        ''' 
        Generate a random integer without repetition

        return:
            roll        (int):  The randomly generated integer
        '''
        roll = random.randint(0, self.word_count)
        if roll in self.past_rolls:
            return self.roll_number()

        self.past_rolls.append(roll)
        if len(self.past_rolls) > self.memory:
            self.past_rolls.pop(0)

        return roll 

class Question():
    ''' 
    Present a word and check the veracity of an answer
    '''

    def __init__(self, word_dict):
        ''' 
        args:
            word_dict       (dict): A dictionary containing all words and articles
        '''
        self.word = ''
        self.word_dict = word_dict

    def get_word(self, roll):
        '''
        Get a word from the dictionary based on the random roll
        
        args:
            roll        (int):      A randomly generated integer
        
        return:
            word        (string):   The selected word
        '''
        self.word = list(self.word_dict.keys())[roll]
        return self.word

    def check_answer(self, answer):
        '''
        Check whether a given answer is correct and show the 
        correct solution.

        args:
            answer      (string):   'der', 'die' or 'das'

        return:
            (boolean):      True if the given answer is correct, else false
            (str):          The correct answer
        '''

        return answer == self.word_dict[self.word], self.word_dict[self.word]