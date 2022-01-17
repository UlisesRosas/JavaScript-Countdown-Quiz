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
var timerEl = document.getElementById("timer")
var startButton = document.querySelector("#start-button");

// var timeLeft = questions.length * 15;

// make a timer
// function to run questions
function startTimer(){ 
    console.log("starting");
    var timeLeft = 10;
    var timeInterval = setInterval(function() {
  if(timeLeft > 1) {
    timerEl.textContent = "Timer:" + timeLeft; 
    timeLeft --;
  } else {
      timerEl.textContent = 'Out of time';
      clearInterval(timeInterval);  
      displayMessage();
    }
    
}, 1000);


};

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    // update page with current question 
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    // clear out old questions and choices
    
};


function questionClick() {
// check if the user guessed wrong
// dispolay new time on page if user guesses wrong
// move to the next question if user guesses at all
// logic to check if there are any questions left
};

function displayMessage(){
    
}


// save the score in local storage

startButton.addEventListener('click', startTimer);