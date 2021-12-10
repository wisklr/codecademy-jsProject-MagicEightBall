let userName = "";
userName = userName || 'Stranger'; // if the userName did not have a value it will get assigned to the string "Steanger"

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);
// check if userName have a value and decides what to choose 
let userQuestion = "dose she love me";

//console.log(`${userName}, you asked ${userQuestion}.`);
console.log (` Your question: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
// random number from 0 to 8 or 7 i don't know 
let eightBall = "";

/*
switch (randomNumber) {
  case 0: 
    eightBall = "It is certain"
   break;
  case 1: 
    eightBall = "It is decidedly so"
   break;
  case 2: 
    eightBall = "Reply hazy try again"
   break;
  case 3:
    eightBall = "Connot predict now"
   break;
  case 4:
    eightBall = "Do not count no it"
   break;
  case 5:
    eightBall = "My sources sey no"
   break;
  case 6:
    eightBall = "Outlook not so good"
   break;
  case 7:
    eightBall = "signs point to yes"
   break;
}
console.log(`The eight ball answered: ${eightBall}.`);
*/             // switch statement

if (randomNumber === 0) {
    console.log("It is certain")
} else if (randomNumber === 1) {
    console.log("It is decidedly so")
} else if (randomNumber === 2) {
    console.log("Reply hazy try again")
} else if (randomNumber === 3) {
    console.log("Cannot predict now")
} else if (randomNumber === 4) {
    console.log("Do not count on it")
} else if (randomNumber === 5) {
    console.log("My sources say no")
} else if (randomNumber === 6) {
    console.log("Outlook not so good")
} else { (randomNumber === 7) 
    console.log("Signs point to yes")
} // if..else if.. else statement

// note for the future when you useing if..else if.. else statement and you try to equal a value to type or just equal something to something    (USE == OR === DON'T USE = SO YOU CAN SAVE AN HOUR OF SEARCHING FOR ERRORS) (JUST UES SWITCH STATEMENT CAZ IT'S EASIER)
