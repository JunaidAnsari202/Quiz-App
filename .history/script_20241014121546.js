const quiz =[
    {
        question: "What is the most used programming in 2021",
        ans1text:"java",
        ans2text:"C",
        ans3text:"Python",
        ans4text:"Javascripit",
        
  },

  {
    question: "What is the most used programming in 2021",
    ans1text:"java",
    ans2text:"C",
    ans3text:"Python",
    ans4text:"Javascripit",
    
},

{
    question: "What is the most used programming in 2021",
    ans1text:"java",
    ans2text:"C",
    ans3text:"Python",
    ans4text:"Javascripit",
    
},

{
    question: "What is the most used programming in 2021",
    ans1text:"java",
    ans2text:"C",
    ans3text:"Python",
    ans4text:"Javascripit",
    
},
]

const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer")

const submit = document.getElementById("submit");
  
let currentQuestion = 0;
let score = 0;

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click",()=>{
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    if( checkedAns === null){
    alert("please select an answer");
    }else{
        if(checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if(currentQuestion<quiz.length){
            question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;
checkedAns.check

        }else{
            alert("your score is" +score+ " out of " + quiz.length);
            location.reload();
        }
    }
     
});


