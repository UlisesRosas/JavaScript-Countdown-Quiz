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
      choices: ["1. yellow", "2.green","3.blue", "4.orange"],
      answer: "blue"
  },
  {
      title: "which one is not food?",
      choices: ["1.dog", "2.apple", "3.home work", "4.house"],
      answer: "aplle"
  }, 

  { 
      title: "Which one is an animal?",
      choices: ["1.cat", "2.tree", "3.stick", "4.couch"],
      answer: "cat"
  },

  { 
    title: "Which one is a sport?",
    choices: ["1.cat", "2.tree", "3.boxing", "4.couch"],
    answer: "boxing"
}
];
var currentQuestionIndex = 0;
var timerEl = document.getElementById("timer")
questionZoneEl.style.display = "none";
endQuizZoneEl.style.display = "none";
var timeLeft = questions.length * 15;

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
        
      displayMessage();
    
    }
    
}, 1000);


};

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    // update page with current question 
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    // display choices in object array
    promptDiv.innerHTML = "";
    for(var i = 0; i < currentQuestion.choices.length; i++ ){
      // makes li for every item in the object
      var answerLi = document.createElement("li");
      answerLi.className = "list-item";
      promptDiv.appendChild(answerLi);
      var answerLiEl = document.querySelector(".list-item")
      // makes buttond insode the li for every item in array
      var answerLiEl = document.createElement("button");
      answerLiEl.className = "btn";
      answerLiEl.textContent = currentQuestion.choices[i];
      answerLiEl.onclick = questionClick;
      answerLi.appendChild(answerLiEl);
    
    }
    
    // clear out old questions and choices   


};
// function to control  What happens on a click
function questionClick() {

// display new time on page if user guesses wrong


  var coerrectAnswer = questions[currentQuestionIndex].answer;
  var selectedAnswer = this.textContent;
  console.log(selectedAnswer,coerrectAnswer)
  // check if the user guessed wrong
  if(coerrectAnswer !== selectedAnswer){
    timeLeft -= 10;
  }
  // move to the next question if user guesses at all
  currentQuestionIndex ++;
  // logic to check if there are any questions left
  if(currentQuestionIndex === questions.length){
    
    endQuiz();
    // gets question if indx length isa not reached
  }else {
    getQuestion();
  }
  
};

function displayMessage(){
    //select paerent
    // make <h1> with text stating that you are out of time 
    questionZoneEl.style.display = "none";
    endQuizZoneEl.style.display = "block";
    var endTitle = document.querySelector("#end-title")
    endTitle.textContent = "You Ran Out of Time";
};

  function endQuiz (){
    questionZoneEl.style.display = "none";
    endQuizZoneEl.style.display = "block";
  };
// save the score in local storage

startButton.addEventListener('click', startQuiz);