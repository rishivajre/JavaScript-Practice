// ✅ Practice Code: 

// ---------------if Else Statements
let score = 85;

if(score >= 90) {
    console.log("A Grade");
} else if (score >= 80) {
    console.log("B Grade");
} else {
    console.log ("C Grade");
}
console.log("-----------------------")

//---------------Switch Statement
let color = "blue";

switch(color) {
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    case "green":
        console.log("Color is Green");
        break;
    default:
        console.log("Unknown Color");
}
console.log("-----------------------")

//--------------- Loops (for, while, do.. while)
//for
for (let i=0; i<=4; i++) {
    console.log ("for loop: " + i);
}

// while 
let count = 1;
while (count<=3) {
    console.log("while loop: " + count);
    count++;
}

//do...while
let num = 1;
do {
    console.log("do..while loop: " + num);
    num++;
} while (num <= 4);
