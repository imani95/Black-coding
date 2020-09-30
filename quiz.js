<div> id="quiz"</div>
<button id="submit">Submit quiz</button>
<div id="results"></div>

function buildQuiz(){}
function showResults(){}
// display quiz right away buildQuiz();
const quizcontainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


// submit, show results submitButton.addEventListener('click, showResults);

Const myQuestions = [

{ 
    question: "What is Beyonce's middle name?",
    answers: {
        a: "britney",
        b: "Giselle",
        c: "siobhan",
    },
    correctAnswer: "b"

 { 
        question: "What is the largest planet",
        answers: {
            a: "saturn",
            b: "jupiter",
            c: "mars",
        },
        correctAnswer: "b"

 { 
            question: "What is the world's longest river?",
            answers: {
                a: "nile",
                b: "mississippi",
                c: "thames",
            },
            correctAnswer: "a"

