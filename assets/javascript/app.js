$('#startButton').on('click', function(){
   createHTML (); 
   startTimer ();
});


function createHTML () {
   HTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center questions'>" + questions[questionCounter] + "</p><p class='first-answer answer'>A. " + answers[questionCounter][0] + "</p><p class='answer'>B. "+answers[questionCounter][1]+"</p><p class='answer'>C. "+answers[questionCounter][2]+"</p><p class='answer'>D. "+answers[questionCounter][3]+"</p>";
   $('#playGround').html(HTML) 
}


$('.answer').on('click', function (){
    userChoice = $(this).text()
    if (userChoice === correctAnswers[questionCounter]) {
        clearInterval(Timer);
        win();
    }
    else {
        clearInterval(Timer);
        loss;
    }
 });

function startTimer () {
    Timer = setInterval(interval, 1000);
    function interval () {
        if (counter === 0) {
            clearInterval(Timer);
            timeoutLoss();
        }
        if (counter > 0) {
            counter--;
        }
        $('.timer').html(counter);
    }
}

function timeoutLoss () {
    unansweredCounter++;
    HTML = '<p class="text-center timer-p">Time Remaining: <span class="timer">' + counter + '</span></p>' + '<p class="text-center">Your time is out! The answer is: ' + correctAnswers[questionCounter];
    $('#playGround').html(HTML);
    setTimeout(delay, 3000);
}

function win () {
    correctCounter++;
    HTML = '<p class="text-center timer-p">Time Remaining: <span class="timer">' + counter + '</span></p>' + '<p class="text-center">Correct! The answer is: ' + correctAnswers[questionCounter];
    $('#playGround').html(HTML);
    setTimeout(delay, 3000);
}

function loss () {
    incorrectCounter++;
    HTML = '<p class="text-center timer-p">Time Remaining: <span class="timer">' + counter + '</span></p>' + '<p class="text-center">Incorrect! The answer is: ' + correctAnswers[questionCounter];
    $('#playGround').html(HTML);
    setTimeout(delay, 3000);
}
function delay () {
    if (questionCounter < 10) {
        questionCounter++;
        createHTML ();
        counter = 30;
        startTimer();
    }
    else {
        gameOver ();
    }
}

function gameOver () {
    HTML = '<p class="text-center timer-p">Time Remaining: <span class="timer">' + counter + '</span></p>' + '<p class="text-center">Here are your results: ' + '</p>' + '<p class = "summary-correct">Correct Answers:' + correctCounter + '</p>' + '<p>Wrong Answers:' + incorrectCounter + '</p>' + '<p>Unanswered' + unansweredCounter + '</p>' + '<p class= "text-center reset-button-container"><a class = "btn btn-primary btn-lg btn-block reset-button" href = "#" role = "button">Start again!</a></p>';
    $('#playGround').html(HTML);
}

function resetGame () {
    questionCounter = 0;
    correctCounter = 0;
    incorrectCounter = 0;
    unansweredCounter = 0;
    counter = 30;
    createHTML ();
    startTimer ();

}

var counter = 30;
var HTML;
var questionCounter = 0;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var Timer;
var userChoice;

var questions = [
    'Which is the largest country in the world?',
    'Which ocean lies on the east coast of the United States?',
    'Which is the largest lake on Earth?',
    'Which is the longest river in the United States?',
    'Which is the largest desert in the world?',
    'Which country does Greenland belong to?',
    'Which is the most populated city in the world?',
    'Riga is the capital city of which country?',
    'Which is the largest state in the US?',
    'In which ocean is Fiji?',
];
var answers = [
    ['Russia', 'Canada', 'China', 'USA'],
    ['Pacific', 'Indian', 'Atlantic', 'Eastern'],
    ['Lake Baikal', 'Lake Superior', 'Lake Michigan', 'Caspian Sea'],
    ['Colorado River', 'Missouri River', 'Yukon River', 'Mississippi River'],
    ['Sahara', 'Antarctic', 'Arabian', 'Gobi'],
    ['Denmark', 'Canada', 'Sweden', 'Iceland'],
    ['Delhi', 'Shanghai', 'Mexico City', 'Tokyo'],
    ['Estonia', 'Lithuania', 'Latvia', 'Poland'],
    ['Texas', 'Alaska', 'California', 'Montana'],
    ['Pacific', 'Atlantic', 'Indian', 'Southern']
];
var correctAnswers = [
    'Russia',
    'Atlantic',
    'Caspian Sea',
    'Missouri River',
    'Antarctic',
    'Denmark',
    'Tokyo',
    'Latvia',
    'Alaska',
    'Pacific',
];