var readLineSync = require("readline-sync");
var score=0;
var userName=readLineSync.question("What is your name?  ");
console.log("Welcome "+userName+"!. Do you know Sauarabh!");
questions=[
  {
    question : "Where does he live?  ",
    answer :"Manduwala",
  },
  {
    question : "What does he like to drink? (Tea/Coffee)  ",
    answer :"Tea",
  },
  {
    question : "Which is his favourite color? (Red/Blue/Black)  ",
    answer : "Blue",
  },
  {
    question : "Is he a pet lover? (Yes/No)  ",
    answer : "No",
  },
  {
    question : "In which branch he has completed BTech? (CSE/IT/ME/Electrical)  ",
    answer : "CSE",
  }
];
function play(question,answer){
  var userAnswer=readLineSync.question(question);
  if(userAnswer.toLowerCase()==answer.toLowerCase()){
    console.log("Right!")
    score++;
    console.log("Your Score: "+score);
  }
  else{
    console.log("Wrong!");
    console.log("Your Score: "+score);
  }

}
for(var i=0; i<questions.length; i++){
  play(questions[i].question,questions[i].answer);
  console.log("-----------------------------------");
}
console.log("Your Score is "+score +" out of 5");