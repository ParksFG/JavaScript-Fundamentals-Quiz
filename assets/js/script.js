var startBtn = document.getElementById('startBtn');
var startQuiz = document.getElementById('startQuiz');
var timeLeft = document.getElementById('headerTimer');
var titleEl = document.getElementById('titles');
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


startBtn.addEventListener("click", function() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            timeLeft.textContent = "Time's up!"
            clearInterval(timerInterval)
            // go to highscore screen
        }

    }, 1000);
    startQuizFunction();
    nextQuestion();
    startIns.setAttribute('style', 'display: none');
    startBtn.setAttribute('style', 'display: none');
})

var createQuestionName = document.createElement('h2');
var createQuestions = document.createElement('ul');
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var questionResult = document.createElement("p")

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
}

function startQuizFunction() {
    startQuiz.appendChild(createQuestions);
    createQuestions.appendChild(li1);
    createQuestions.appendChild(li2);
    createQuestions.appendChild(li3);
    createQuestions.appendChild(li4);
    startQuiz.appendChild(questionResult);
    questionResult.textContent = " ";
}

if(qN === 0) {
    li3.addEventListener("click", function choice() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Correct!";
        this.removeEventListener("click", choice);
    })
    li1.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Wrong! :(";
        secondsLeft = secondsLeft - wrongSub;
    })
    li2.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Wrong! :(";
        secondsLeft = secondsLeft - wrongSub;
    })
    li4.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Wrong! :(";
        secondsLeft = secondsLeft - wrongSub;
    })
}else if(qN === 1) {
    li3.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Correct!";
    })
    li1.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Wrong! :(";
        secondsLeft = secondsLeft - wrongSub;
    })
    li2.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Wrong! :(";
        secondsLeft = secondsLeft - wrongSub;
    })
    li4.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Wrong! :(";
        secondsLeft = secondsLeft - wrongSub;
    })
}else if(qN === 2) {
    li4.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Correct!";
    })
    li1.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Wrong! :(";
        secondsLeft = secondsLeft - wrongSub;
    })
    li2.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Wrong! :(";
        secondsLeft = secondsLeft - wrongSub;
    })
    li3.addEventListener("click", function() {
        qN++;
        nextQuestion();
        questionResult.textContent = "That's Wrong! :(";
        secondsLeft = secondsLeft - wrongSub;
    })

}
