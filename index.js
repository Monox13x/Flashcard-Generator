var BasicCard = require("./BasicCard")
var ClozeCard = require("./ClozeCard")

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front); 


console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze); 

console.log(firstPresidentCloze.partial); 

console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log(brokenCloze)