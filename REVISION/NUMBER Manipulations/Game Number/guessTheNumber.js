// Practice Qs
const prompt = require('prompt-sync')();

let gmaeNum = 25;

let userNum = prompt("Guess the game Number: ");

while (userNum != gmaeNum) {
    userNum = prompt("Ooops So Close...Guess Again!: ");
}

console.log("Congrattsss!!!! You Hit It!");