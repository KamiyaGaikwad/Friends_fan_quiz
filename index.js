const chalk = require('chalk');
var ReadLineSync = require("readline-sync")
var username = ReadLineSync.question("Please Enter your name: ");
var score = 0;
var Q1 = {
  q: "Joey played Dr. Drake Ramoray on which soap opera show?",
  ans: "days of our lives"
}

var Q2 = {
  q: "Who was the maid of honor at Monica’s wedding?",
  ans: "rachel"
}

var Q3 = {
  q: "What is the name of Phoebe’s twin sister?",
  ans: "ursula"
}

var Q4 = {
  q: "What was the profession of Joey’s imaginary friend?",
  ans: "space cowboy"
}

var Q5 = {
  q: "Joey and Chandler’s TV guide is addressed to who?",
  ans: "miss chanandler bong"
}

var setquestions = [Q1,Q2,Q3,Q4,Q5]


console.log(chalk.red("Hello",username,",nice to meet you.Are you a friends fan, lets find out"))
console.log(chalk.cyan("Friends Fan Quiz"))
console.log("-------------------------------")

for (i=0;i<setquestions.length;i++){
  console.log("Question ",i+1)
  var userans = ReadLineSync.question(setquestions[i].q)
  var useransd = userans.toLowerCase();

  if(useransd == setquestions[i].ans){
    console.log(chalk.blue("Correct answer!!"))
    score = score + 1;
    
  }
  else {
    console.log(chalk.magenta("Wrong Answer!"))
  }
  
  console.log(chalk.yellow("Your Score: ",score))
  console.log("                    ")
}
console.log("----------------------------------------")
console.log(chalk.green("Your Final Score is: ",score));
console.log("----------------------------------------")
console.log(chalk.bgRed("Our High scorer are  "))
console.log("--------------------")

var highscored = {
  Kamiya : 5,
  Diva : 3
}
for(var k=0;k<Object.keys(highscored).length;k++){
  console.log("Name : ",Object.keys(highscored)[k])
  console.log("Score : ",Object.values(highscored)[k])
  console.log("-----------")
}

for(j=0;j<Object.keys(highscored).length;j++){
  var x = Object.values(highscored)
  var y = Object.keys(highscored)
  if(parseInt(x[j]) <= score){
  console.log(chalk.green("Congratulations!!! You have beat the high score."));
  console.log(chalk.blue("Please send me the screenshot to update. Thank you"))
    break;
}
  if(parseInt(x[j+1]) <= score){
  console.log(chalk.green("Congratulations!!! You have beat the 2nd high score."));
  console.log(chalk.blue("Please send me the screenshot to update. Thank you"))
    break;
  }
else{
    console.log(chalk.blue("Thank you for playing with us!"))
    break;
}}





