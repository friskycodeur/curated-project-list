const quizQuestions = [
  {
    question: "What is Naruto's real name?",
    a: "Namikaze Naruto",
    b: "Uzumaki Naruto",
    c: "Uchiha Naruto",
    d: "Hyuga Naruto",
    correct: "b",
  },
  {
    question: "Who is Naruto's first kiss?",
    a: "Sakura",
    b: "Sasuke",
    c: "Hinata",
    d: "Kakashi",
    correct: "b",
  },
  {
    question: "Who is Naruto's catchphrase?",
    a: "Dattebayo",
    b: "Dattebasa",
    c: "Dattebana",
    d: "Datteheyo",
    correct: "a",
  },
];

const question_el = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit_btn = document.getElementById("submit");

let currentQuiz = 0;
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizQuestions[currentQuiz];

  question_el.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

submit_btn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizQuestions.length) {
    loadQuiz();
  } else {
    alert("The quiz has been completed.");
  }
});
