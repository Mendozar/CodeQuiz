var startButton = document.querySelector("#start-button");
var questionDiv = document.querySelector("#questions");
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

startButton.addEventListener("click", function() {
    $("#startPage").hide();


    function buildQuize(){


      $.each(theQuestions, function(index,item){
            var outputHTML = [];
            var answers = [];
            
            for(letter in item.answers){
              answers.push(
                `<label> <input type="radio" name="question" value="${letter}"> ${item.answers[letter]}</label>`
              );  
            };    
   
            // outputHTML.push(
            //   `<div id="slide"> 
            //    <div class="question"> ${item.question} </div>
            //    <div class="answers"> ${answers.join('')} </div>
            //    </div>`
            //   );

          $(".container").html(
            `<div id="slide"> 
            <div class="question"> ${item.question} </div>
            <div class="answers"> ${answers.join('')} </div>
            </div>`);

          $("input[type='radio']").on("click", function() {
            $("#slide").hide();
          });
            
      });

    }
buildQuize();

});

