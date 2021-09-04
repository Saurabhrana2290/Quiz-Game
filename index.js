var readLineSync = require("readline-sync");
var score=0;
var userName=readLineSync.question("What is your name?  ");
console.log("\nWelcome "+userName+"!. Lets see, How well do you know Sauarabh!\n");
questions=[
  {
    question : "Where does he live?  (Dehradun/Noida/Saharanpur)  ",
    answer :"Saharanpur",
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
  },
  {
    question : "Which is his favourite sports game? (Football/Hockey/Cricket)  ",
    answer : "Cricket",
  },
  {
    question : "When is his birthday? (26 Jan/6 March/16 Feb)  ",
    answer : "16 Feb",
  },
  {
    question : "What is his favourite Icecream? (Vanilla/Chocolate/Butterscotch)  ",
    answer : "Butterscotch",
  },
  {
    question : "How does he like to travel? (Bus/Bike/Cycle)  ",
    answer : "Cycle",
  },
  {
    question : "Which social media app he mostly use? (Facebook/Instagram/Youtube)  ",
    answer : "Youtube",
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
console.log("Your Score is "+score +" out of 10");