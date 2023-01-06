//Psudo coding
var startquiz = document.querySelector(".button");
var quizbox = document.querySelector(".box");
var timeleft = 60;
var questions= ["What year did New Mexico become a state?", "Which town in New Mexico is home to the oldest church in the US?"]
var answers = [["1872", "1912", "1949"], ["Santa Fe", "Alamagordo", "Truth or Consequences"]]
var correctIndex = ['1912', 'Santa Fe']
// var questionObjs = [{
//     question: "What year did New Mexico become a state?",
//     answers: ["1872", "1912", "1949"],
//     correctIndex: 1
// },]
// var timeleftstring = timeleft.toString();
var currentQuestion = 0
var countdownTimer;
var timeleftSpan = document.querySelector("#timer");
var question = document.querySelector("#question");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var answerElements = document.querySelectorAll(".answer");
var question1 = document.querySelector(".question1");
var messageEl = document.querySelector("#message");
var rightorwrong = ["Correct!", "Wrong!"];
// var question2 = document.querySelector(".question2");
// var answer1 = document.querySelectorAll(".answer1");
var endpage = document.querySelector(".endpage");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var finaltime = document.querySelector("#score");
// var correct = document.querySelector(".c");
// var wrong = document.querySelectorAll(".w");

//start button presents questions
startquiz.addEventListener("click", startGame);
function startGame(event) {
  event.preventDefault();
  // question1.classList.remove("hide");
  startquiz.classList.add("hide");

  //start button begins timer
  countdownTimer = setInterval(function () {
    if (timeleft <= 1) {
      clearInterval(countdownTimer);
    }
    timeleft--;
    timeleftSpan.textContent = timeleft;
  }, 1000);
}

function loadNextQuestion() {
    // change textcontent of question element
    question.textContent = questions[currentQuestion];
    // change text content of answers
    answerA.textContent = answers[currentQuestion][0];
    answerB.textContent = answers[currentQuestion][1];
    answerC.textContent = answers[currentQuestion][2];
    // increment currentQuestion
    currentQuestion = currentQuestion + 1;
    if (currentQuestion < questions.length){
      loadNextQuestion();
    } else
    console.log('endquiz');
    finalpage();
      // endpage.classList.remove("hide");
    //  questions.classList.add("hide");
    }


answerElements.forEach((answers) => answers.addEventListener('click', checkAnswer))

function checkAnswer(event) {
    // check what was selected
    console.log(event)
    // event.target
    if (event.target == (answerB)){
      messageEl.textContent = rightorwrong[0];
    } else {
      messageEl.textContent = rightorwrong[1];
      }
      timeleft = timeleft-=5;
    
      //specify event and make it right or wrong
    // check if wrong or right
    // if 
    // if wrong deduct time
    // display they are wrong right
    loadNextQuestion();
}


//selecting the wrong answer goes to next question, and removes 10 seconds
// wrong.forEach((wrong) => wrong.addEventListener("click", nextpagewrong));
// function nextpagewrong() {
//   question2.classList.remove("hide");
//   question1.classList.add("hide");
//   timeleft = timeleft - 10;
  //timeleft -=10;
// }
//selecting the correct answer goes to next question
// correct.addEventListener("click", nextpage);
// function nextpage() {
//   question2.classList.remove("hide");
//   question1.classList.add("hide");
// }
// answer.forEach(answer => answer.addEventListener('click', nextpage));
// function nextpage(){
// question2.classList.remove('hide');
// question1.classList.add('hide');

// }

function finalpage() {
  endpage.classList.remove("hide");
  question2.classList.add("hide");
  //pause timer at final page
  clearInterval(countdownTimer);
  finaltime.textContent = timeleft;
}

// answer1.forEach((answer1) => answer1.addEventListener("click", finalpage));
// function finalpage() {
//   endpage.classList.remove("hide");
//   question2.classList.add("hide");
//   //pause timer at final page
//   clearInterval(countdownTimer);
//   finaltime.textContent = timeleft;
// }
//user selects answer

//user may enter initials for score, and score is saved to page
function savehighscore() {
  // var timeleftstring = timeleft.toString();
  var highscore = {
    initialsinput: initials.value,
    savescore: timeleft,
  };
  localStorage.setItem("highscore", JSON.stringify(highscore));
}

// score is rendered on the screen
function renderhighscore() {
  var lastscore = JSON.parse(localStorage.getItem("highscore"));
  // check if data is returned, if not, exit the function
  if (lastscore !== null) {
    document.getElementById("hscores").innerHTML =
      lastscore.initialsinput + ":  ";
    document.getElementById("hscoretime").innerHTML = lastscore.savescore;
  } else {
    return;
  }
}
submit.addEventListener("click", function (event) {
  event.preventDefault();
  savehighscore();
  renderhighscore();
});

//function presents last score when page is loaded
function init() {
  renderhighscore();
}
init();
//correct answer presents 'correct'
//wrong answer presents 'incorrect' and deducts time
//any answer continues on to the next question

//when timer turns to 0, game is finished
//user is presented score
