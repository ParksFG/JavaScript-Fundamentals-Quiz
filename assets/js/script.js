var startBtn = document.getElementById('startBtn');
var startQuiz = document.getElementById('startQuiz');
var timeLeft = document.getElementById('headerTimer');
var titleEl = document.getElementById('titles');
var highScoreBtn = document.getElementById('headerHighSc')
var startInsEl = document.getElementById('startIns');
var centerEl = document.querySelector('main')
var score = 0;

// Array of all questions, choices, and their correct answers.
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correct: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ______.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correct: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correct: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correct: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correct: "4. console.log"
    }
];

var secondsLeft = 76;
var wrongSub = 10;
var gameDone = false


startBtn.addEventListener("click", function() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            timeLeft.textContent = "Time's up!"
            clearInterval(timerInterval)
        }else if(gameDone === true) {
            timeLeft.textContent = "Time's up!"
            clearInterval(timerInterval)
        }

    }, 1000);
    startQuizFunction();
    nextQuestion();
})

var createQuestionName = document.createElement('h2');
var createQuestions = document.createElement('ul');
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var questionResult = document.createElement("p")
var qLength = questions.length

// qN = Question Number
var qN = 0;

function nextQuestion() {
    var questionTitle = questions[qN].question;
    var questionChoice1 = questions[qN].choices[0];
    var questionChoice2 = questions[qN].choices[1];
    var questionChoice3 = questions[qN].choices[2];
    var questionChoice4 = questions[qN].choices[3];
    titleEl.textContent = questionTitle;
    li1.textContent = questionChoice1;
    li2.textContent = questionChoice2;
    li3.textContent = questionChoice3;
    li4.textContent = questionChoice4;
    return qN;
};

function startQuizFunction() {
    secondsLeft = 76
    gameDone = false
    qN = 0
    startInsEl.setAttribute('style', 'display: none');
    startBtn.setAttribute('style', 'display: none');
    startQuiz.appendChild(createQuestions);
    createQuestions.appendChild(li1);
    createQuestions.appendChild(li2);
    createQuestions.appendChild(li3);
    createQuestions.appendChild(li4);
    startQuiz.appendChild(questionResult);
    questionResult.textContent = " ";
};

document.addEventListener("click", function(event) {
    if(event.target.matches('li')){
        if(event.target.textContent === questions[qN].correct) {
            if(qN < 4) {
                qN++;
                nextQuestion();
                questionResult.textContent = "That's Correct!";
            }else {
                finish()
            };
        }else if(event.target.textContent !== questions[qN].correct) {
            if(qN < 4) {
                qN++;
                nextQuestion();
                questionResult.textContent = "That's Wrong! :(";
                secondsLeft = secondsLeft - wrongSub;
            }else {
                finish()
            };

        }}
});

var submission = document.createElement("form");
var label = document.createElement("label");
var input = document.createElement("input");
var submit = document.createElement("input")


function finish() {
    gameDone = true
    startQuiz.removeChild(createQuestions);
    titleEl.textContent = "End of quiz!";
    score = secondsLeft;
    questionResult.textContent = "You scored a " + score + "/75!";
    startQuiz.appendChild(submission);
    submission.appendChild(label);
    submission.appendChild(input);
    submission.appendChild(submit);
    input.setAttribute('id', 'initialsInput')
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit HighScore!');
    submit.setAttribute('id', 'submitScore');
    label.textContent = "Enter your initials!";
    var initialsInput = document.getElementById('initialsInput')
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        var initials = initialsInput.value;

        if(initials === "") {
            window.confirm("Please enter initials.")
        } else {
            var record = {
                initials: initials,
                score: score
            }
            var records = localStorage.getItem("records");
            if(records === null) {
                records = [];
            } else {
                records = JSON.parse(records);
            }
            records.push(record);
            var quizScore = JSON.stringify(records);
            localStorage.setItem("records", quizScore);
            startQuiz.removeChild(submission);
            startQuiz.removeChild(questionResult);
            startInsEl.setAttribute('style', 'display: default');
            startBtn.setAttribute('style', 'display: default');
            titleEl.textContent = "Coding Quiz Challenge";
        }
    }

)
    
}

highScoreBtn.addEventListener("click", function() {
    if(titleEl.textContent !== "Hiscores:") {
        recordHighScores();
        var backBtn = document.createElement("button");
        startQuiz.appendChild(backBtn);
    };
    titleEl.textContent = "Hiscores:";
    startInsEl.setAttribute('style', 'display: none');
    startBtn.setAttribute('style', 'display: none');
    backBtn.textContent = "Go Back"
    backBtn.setAttribute('id', 'backBtn');
    backBtn.addEventListener('click', function() {
        var lists = document.getElementById("HighScoreList");
        startQuiz.removeChild(lists)
        titleEl.textContent = "Coding Quiz Challenge";
        startInsEl.setAttribute('style', 'display: default');
        startBtn.setAttribute('style', 'display: default');
        startQuiz.removeChild(backBtn);
    })
    }
    
)
// Records the high
function recordHighScores() {
    var recordsLength = JSON.parse(localStorage.getItem('records')).length;
    var fullRecords = JSON.parse(localStorage.getItem('records'))
    var HighScoreList = document.createElement("ul");
    startQuiz.appendChild(HighScoreList);
    for(var i = 0; i < recordsLength; i++ ) {
        var recordItem = document.createElement('li');
        recordItem.setAttribute('id', 'recordItem')
        HighScoreList.setAttribute('id', 'HighScoreList')
        HighScoreList.appendChild(recordItem);
        recordItem.textContent = fullRecords[i].initials + "'s score: " + fullRecords[i].score;
    }
}
