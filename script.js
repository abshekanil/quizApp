const quizQuestions = [
  {
    question: "Which sport is known as the 'king of sports'?",
    options: ["Football", "Basketball", "Tennis", "Cricket"],
    answer: "Football",
  },
  {
    question: "Which animal is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "Which bird is the fastest animal on two legs?",
    options: ["Ostrich", "Eagle", "Hawk", "Sparrow"],
    answer: "Ostrich",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Bill Gates", "Alan Turing", "Charles Babbage", "Steve Jobs"],
    answer: "Charles Babbage",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: "Au",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "South Korea", "Japan", "Vietnam"],
    answer: "Japan",
  },
  {
    question: "Who is the author of 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "CH4", "O2"],
    answer: "H2O",
  },
];

let resetBtnContainer;
let questionDisplay = document.querySelector(".question");
let StartBtn = document.getElementById("btn");
let quizBox = document.querySelector(".quizBox");
let optionsDisplay = document.querySelector(".options");
let btnContainer = document.querySelector(".btnContainer");

StartBtn.addEventListener("click", function () {
  displayQuestion();
  displayOptions();
  StartBtn.innerHTML = "Next";
});

let currentIndex = 0;
let optionIndex = 0;

function displayQuestion() {
  if (currentIndex < quizQuestions.length) {
    questionDisplay.innerHTML = "";
    let eachQuestion = quizQuestions[currentIndex].question;
    questionDisplay.innerHTML = eachQuestion;
    currentIndex++;
  } else {
   
    questionDisplay.innerHTML = "End of Quiz";
    StartBtn.remove();
    displayResetBtn();

    
  }
}



function displayOptions() {
  if (optionIndex < quizQuestions.length) {
    optionsDisplay.innerHTML = "";

    let options = quizQuestions[optionIndex].options;
    optionIndex++;
    console.log(currentIndex);

    options.forEach((option, index) => {
      let radioInput = document.createElement("input");
      radioInput.setAttribute("type", "radio");
      radioInput.setAttribute("name", "option");
      radioInput.setAttribute("value", option);
      radioInput.setAttribute("required", "true");

        

      let label = document.createElement("label");
      label.textContent = option;

      optionsDisplay.appendChild(radioInput);
      optionsDisplay.appendChild(label);

      optionsDisplay.appendChild(document.createElement("br"));
    });
  } else {
    optionsDisplay.innerHTML = "";
    optionIndex = 0;
  }
}

function displayResetBtn() {
  if (!resetBtnContainer) {
    resetBtnContainer = document.createElement("div");
    resetBtnContainer.classList.add("btnContainer");
    quizBox.appendChild(resetBtnContainer);
  }

  resetBtnContainer.innerHTML = "";
  let restBtn = document.createElement("button");
  restBtn.setAttribute("id", "reset");
  restBtn.innerHTML = "RESET";
  resetBtnContainer.appendChild(restBtn);

  restBtn.addEventListener("click", function () {
    currentIndex = 0;
    optionIndex = 0;
    displayQuestion();
    displayOptions();
    restBtn.remove();
    btnContainer.appendChild(StartBtn);
  });
}

