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

const submit = document.getElementById("submit");
  
let currentQuestion = 0;
let score = 0;

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans1text;
option_c.textContent = quiz[currentQuestion].ans1text;
option_a.textContent = quiz[currentQuestion].ans1text;


