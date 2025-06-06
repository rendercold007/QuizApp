const question = [
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "BErlin", correct: false},
            { text: "Madrid", correct: false},
            { text: "Tokyo",  correct: true },
            { text: "Lisbon", correct: false},
            ]
    },
    {
        question: "Which language runs in a browser?",
        answers: [
            { text: "Java", correct: false},
            { text: "C", correct: false},
            {text: "Python", correct: false},
            { text: "Javascript", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let score = 0;

function startQuiz(){
    currrentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("wrong");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}

startQuiz();