//Psudo coding
var startquiz = document.querySelector('.button');
var quizbox = document.querySelector('.box');
var timeleft = 60;
// var timeleftstring = timeleft.toString();
var countdownTimer;
var timeleftSpan = document.querySelector('#timer')
var question1 = document.querySelector('.question1')
var answer = document.querySelectorAll('.answer')
var question2 = document.querySelector('.question2')
var answer1 = document.querySelectorAll('.answer1')
var endpage = document.querySelector('.endpage')
var initials = document.querySelector('#initials')
var submit = document.querySelector('#submit')
var finaltime = document.querySelector('#score')

//start button presents questions
startquiz.addEventListener('click', startGame)

function startGame() {
question1.classList.remove('hide');
startquiz.classList.add('hide');
//start button begins timer
countdownTimer = setInterval (function(){
    if (timeleft <= 1){
        clearInterval(countdownTimer)
    }
timeleft--;
timeleftSpan.textContent = timeleft;
} ,1000);

}
answer.forEach(answer => answer.addEventListener('click', nextpage));
function nextpage(){
question2.classList.remove('hide');
question1.classList.add('hide');

}

answer1.forEach(answer1 => answer1.addEventListener('click', finalpage));
function finalpage(){
    endpage.classList.remove('hide');
    question2.classList.add('hide');
    //pause timer at final page
    clearInterval(countdownTimer);
    finaltime.textContent = timeleft;

}
//user selects answer

//user may enter initials for score, and score is saved to page
function savehighscore () {
    // var timeleftstring = timeleft.toString();
    var highscore = {
initialsinput: initials.value,
savescore: timeleft
    };
localStorage.setItem("highscore", JSON.stringify(highscore));
}

// score is rendered on the screen
function renderhighscore() {
var lastscore = JSON.parse(localStorage.getItem('highscore'));
// check if data is returned, if not, exit the function
if (lastscore !== null) {
    document.getElementById("hscores").innerHTML = lastscore.initialsinput+":  ";
    document.getElementById("hscoretime").innerHTML = lastscore.savescore;
} else {
    return;
}
}
submit.addEventListener('click', function(event){
    event.preventDefault();
    savehighscore();
    renderhighscore();
})

//function presents last score when page is loaded
function init(){
    renderhighscore();
}
init();
    //correct answer presents 'correct'
    //wrong answer presents 'incorrect' and deducts time
    //any answer continues on to the next question

//when timer turns to 0, game is finished
    //user is presented score
    
