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
$("#start-button").on("click", function(){  
   
  $("#startPage").hide();

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

      // $("input[type='radio']").on("click", function(event) {
      //  $("#slide").hide();
      //});
          
            
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
  showSlide(currentSlide + 1);
}






});

