var startButton = document.querySelector("#start-button");
// var mainEl = document.querySelector()
var startQuizZoneEl = document.querySelector("#start-quiz-zone");
var questionZoneEl = document.querySelector("#question-zone");
var endQuizZoneEl = document.querySelector("#end-quiz-zone");
var promptDiv = document.querySelector("#question-choices");
// make an array of objects with an array in the object to form the questions and answers
var questions = [
  {
      title: "what is the color of the sky?",
      choices: ["yellow", "green","blue", "orange"],
      answer: "blue"
  },
  {
      title: "which one is not food?",
      choices: ["dog", "apple", "home work", "house"],
      answer: "aplle"
  }, 

  { 
      title: "Which one is an animal?",
      choices: ["cat", "tree", "stick", "couch"],
      answer: "cat"
  },

  { 
    title: "Which one is a sport?",
    choices: ["cat", "tree", "boxing", "couch"],
    answer: "boxing"
}
];
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerEl = document.getElementById("timer")
questionZoneEl.style.display = "none";
endQuizZoneEl.style.display = "none";
// var timeLeft = questions.length * 15;

function startQuiz(){
  startTimer();
  startQuizZoneEl.style.display = "none";
  questionZoneEl.style.display = "block";
  getQuestion();
};

// make a timer
function startTimer(){ 
    console.log("starting");
   
    var timeInterval = setInterval(function() {
  if(timeLeft > 1) {
    timerEl.textContent = "Timer:" + timeLeft; 
    timeLeft --;
  } else {
      timerEl.textContent = 'Out of time';
      clearInterval(timeInterval);  
      displayMessage();
      endQuiz();
    }
    
}, 1000);


};

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    // update page with current question 
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    // display choices in form of buttons
    promptDiv.innerHTML = "";
    for(var i = 0; i < currentQuestion.choices.length; i++ ){
      
      var answerBtnEl =  document.createElement("button");
      answerBtnEl.className = "btn";
      answerBtnEl.textContent = currentQuestion.choices[i];
      answerBtnEl.onclick = questionClick;
      promptDiv.appendChild(answerBtnEl);
    
    }
    
    // clear out old questions and choices   


};

function questionClick() {
// check if the user guessed wrong
// display new time on page if user guesses wrong
// move to the next question if user guesses at all
// logic to check if there are any questions left
  var coerrectAnswer = questions[currentQuestionIndex].answer;
  var selectedAnswer = this.textContent;
  console.log(selectedAnswer,coerrectAnswer)
  if(coerrectAnswer !== selectedAnswer){
    timeLeft -= 10;
  }
  currentQuestionIndex ++;
  if(currentQuestionIndex === questions.length){
    endQuiz();
  }else {
    getQuestion();
  }
  
};

function displayMessage(){
    //select paerent
    // make <h1> with text stating that you are out of time 
}

  function endQuiz (){
    questionZoneEl.style.display = "none";
    endQuizZoneEl.style.display = "block";
  };
// save the score in local storage

startButton.addEventListener('click', startQuiz);