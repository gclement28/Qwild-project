class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}
let questions = [
  new Question(
    'What was the most lucrative multimedia franchise in the world on January 1st, 2018 ?',
    ['Pokemon', 'Star Wars', 'Harry Potter', 'The Young and the Restless'],
    'Pokemon'
  ),

  new Question(
    'The Bald Eagle is a national symbol of the USA. But Benjamin Franklin would have preferred:',
    ['Bengal Tiger', 'Black Panther', 'American Lion', 'Savage Turkey'],
    'Savage Turkey'
  ),
  new Question(
    'Which country is the largest consumer of wine per capita?',
    ['France', 'Australia', 'USA', 'Vatican'],
    'Vatican'
  ),
  new Question(
    'Which of these celebrities tried to buy Marvel Comics during the 90s?',
    ['Donald Trump', 'Michael Jackson', 'Kanye West', 'Stan Lee'],
    'Michael Jackson'
  ),
  new Question(
    'According to you, how many kilometers a Bic Crystal pen is able to write?',
    [
      'Between 2 and 3km',
      'Between 3 and 4km',
      'Between 5 and 6km',
      'Between 10 and 100km',
    ],
    'Between 2 and 3km'
  ),
];

console.log(questions);

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

/*////////////////////////////////////////////////////////////*/

const display = {
  elementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function () {
    endQuizHTML = `
        <h1>Quizz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown('quiz', endQuizHTML);
  },
  question: function () {
    this.elementShown('question', quiz.getCurrentQuestion().text);
  },
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      };
    };
    ////////////////////////////////////////////////////////////////////////

    for (let i = 0; i < choices.length; i++) {
      this.elementShown('choice' + i, choices[i]);
      guessHandler('guess' + i, choices[i]);
    }
  },
  progress: function () {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.elementShown(
      'progress',
      'Question ' + currentQuestionNumber + ' sur ' + quiz.questions.length
    );
  },
};

////////////////////////////////////////////////////////////////////////////Game

quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  }
};
//////////////////////////////////////////////////////

let quiz = new Quiz(questions);
quizApp();

console.log(quiz);
