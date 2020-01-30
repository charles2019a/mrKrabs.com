const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//let lastAnswer = prompt("Please enter your answer");

const myQuestions = [
    {
      question: "What is Mr Krabs full name?",
      answers: {
        a: "Mr Krabs",
        b: "Eugene George Krabs",
        c: "Euegene Harold Krabs"
      },
      correctAnswer: "c"
    },
    {
      question: "What is Mr Krabs address?",
      answers: {
        a: "test",
        b: "test",
        c: "test"
      },
      correctAnswer: "c"
    },
    {
      question: "What is Mr Krabs .....?",
      answers: {
        a: "test",
        b: "test",
        c: "test",
        d: "test"
      },
      correctAnswer: "d"
    }
  ];

window.onload = function buildQuiz(){
   
    const quizContainer = document.getElementById('quiz');
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
        `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  window.onload = function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide===0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide===slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  showSlide(0);


buildQuiz();

function showResults(){}



submitButton.addEventListener('click', showResults);