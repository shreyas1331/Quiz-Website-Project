
let questions = [
  {
    id: 1,
    question: "Who developed the Python language?",
    answer: "Guido van Rossum",
    options: [
      "Zim Den",
      "Guido van Rossum",
      "Niene Stom",
      "Wick Van Rossum"
    ]
  },
  {
    id: 2,
    question: "Which one of the following is the correct extension of the Python file?",
    answer: ".py",
    options: [
      ".py",
      ".python",
      ".p",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "Which of the following statements is correct regarding the object-oriented programming concept in Python?",
    answer: "Objects are real-world entities while classes are not real",
    options: [
      "Classes are real-world entities while objects are not real",
      "Objects are real-world entities while classes are not real",
      "Both objects and classes are real-world entities",
      "All of the above"
    ]
  },
  {
    id: 4,
    question: "Is Python case sensitive when dealing with identifiers?",
    answer: "No",
    options: [
      "No",
      "Yes",
      "Machine dependent",
      "none of the mentioned"
    ]
  },
  {
    id: 5,
    question: "Which of the following is used to define a block of code in Python language?",
    answer: "Indentation",
    options: [
      "Indentation",
      "Key",
      "Brackets",
      "All of the above"
    ]
  },
];


let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href ="end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
