let questions = [
  {
    question: 'Which method is used in Python to add an element to a list',
    answer_1: 'onemore()',
    answer_2: 'count()',
    answer_3: 'append()',
    answer_4: 'insert()',
    right_answer: 3,
  },

  {
    question:
      'Which loop is mostly used to interact with an array in Javascript?',
    answer_1: 'function',
    answer_2: 'def',
    answer_3: 'while',
    answer_4: 'for',
    right_answer: 4,
  },

  {
    question: 'Which symbol reperesents Modulo in Python?',
    answer_1: '+=',
    answer_2: '<',
    answer_3: '%',
    answer_4: '**',
    right_answer: 3,
  },

  {
    question: 'Which data structure in Python is immutable and unordered?',
    answer_1: 'Dictionary',
    answer_2: 'Listen',
    answer_3: 'Set',
    answer_4: 'Tupel',
    right_answer: 1,
  },

  {
    question: 'How far away is Mars from Earth?',
    answer_1: '501.346.710 Km',
    answer_2: '659.772.092 Km',
    answer_3: '384.400 Km',
    answer_4: '301.016.265 Km',
    right_answer: 4,
  },

  {
    question:
      'On which layer of the OSI model is the application layer located?',
    answer_1: '1',
    answer_2: '7',
    answer_3: '5',
    answer_4: '2',
    right_answer: 2,
  },

  {
    question: 'Which is the largest country in the world in terms of area?',
    answer_1: 'Kanada',
    answer_2: 'USA',
    answer_3: 'Russland',
    answer_4: 'China',
    right_answer: 3,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('sound/win.mp3');
let AUDIO_FAIL = new Audio('sound/lose.mp3');

function init() {
  document.getElementById('questions-comp').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionbody').style = 'display: none';

    document.getElementById('allQuestions').innerHTML = questions.length;
    document.getElementById('compRightQuestions').innerHTML = rightQuestions;
    document.getElementById('header-img').src = 'img/award.png';
  } else {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;

    let question = questions[currentQuestion];

    document.getElementById('countNumber').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
  }
}

function answer(selector) {
  let question = questions[currentQuestion]; 
  let selectedQuestionNumber = selector.slice(-1); 
  let idOfRightAnswer = `answer_${question['right_answer']}`;

  if (selectedQuestionNumber == question['right_answer']) {
    document.getElementById(selector).parentNode.classList.add('bg-success');
    AUDIO_SUCCESS.play();
    rightQuestions++;
  } else {
    document.getElementById(selector).parentNode.classList.add('bg-danger');
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add('bg-success');
    AUDIO_FAIL.play();
  }

  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-button').disabled = true; 
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
  document.getElementById('header-img').src = 'img/questionz.png';
  document.getElementById('endScreen').style = 'display: none';
  document.getElementById('questionbody').style = '';
  currentQuestion = 0;
  rightQuestions = 0;
  init();
}
