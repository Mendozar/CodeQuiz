//var questionDiv = document.querySelector("#questions");
var theQuestions = [
    {
      question: "String Values must be enclosed within _____ when being assigned to variables.",
      answers: {
        a: "commas",
        b: "curly brackets",
        c: "parentheses",
        d: "quotes"
      },
      correctAnswer: "d"
    },
    {
      question: "Arrays in Javascript can be used to store _____.",
      answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "Commonly used data types DO NOT include:",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
      },
      correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },    
      {
        question: "The condition in an if / else statement is enclosed whitin _____.",
        answers: {
            a: "square brackets",
            b: "curly brackets",
            c: "parentheses",
            d: "quotes"
        },
        correctAnswer: "b"
      },
      {
        question: "A very userful tool used during development and debugging for printing content to the debugger is:",
        answers: {
          a: "JavaScript",
          b: "terminal/bash",
          c: "for loops",
          d: "console.log"
        },
        correctAnswer: "d"
      }
  ];

//startButton.addEventListener("click", function() {
$(next).hide();
$("#start-button").on("click", function(){  
   
  $("#startPage").hide();
  $(next).show();
  startTimer();

  var outputHTML = [];
  function buildQuize(){

    $.each(theQuestions, function(index,item){ 
      var answers = [];
            
      for(letter in item.answers){
        answers.push(
          `<label> <input type="radio" id="myRadio" name="question${index}" value="${letter}"> ${item.answers[letter]}</label>`
        );  
      };    
   
      outputHTML.push(
        `<div class="slide"> 
        <div class="question"> ${item.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
      );

      $(".container").html(outputHTML.join(''));

      });


    }
buildQuize();

var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
}
showSlide(currentSlide);


$("#next").on("click", function() {
  showNextSlide();
  });

function showNextSlide() {  
  if (currentSlide < outputHTML.length -1 ){
    showSlide(currentSlide + 1);
  } else {
    $(".container").html(`<div>Results go here</div>`);
    $(next).hide();
  }
}

function startTimer() {
  var timeleft = 75;
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      $("#timer").text("Timeout! You failed the quiz.");
    } else {
      $("#timer").text(timeleft + " seconds remaining");
      }
      timeleft -= 1;
  }, 1000);


}




});

