// Extract the last four characters from the string below;
// "beautiful"
let text = "beautiful";
let result = text.substr(5, 8);
console.log(result);

// insert the following string at the fourth index of the below variable:
// "eat"
const food = "I was feeling hungry today"
let verb = "eat"
console.log(`I was ${verb} feeling hungry today`);

// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."brown"
const story= "The quick brown fox jumps over the lazy dog"
console.log(story.split("the").length - 1);
console.log(story.split("brown").length - 1);

// Using JavaScript, find the following words from the following strings:
// 1. "now"
const string1 = "We are now going to school";
console.log(string1.indexOf("now"))

// 2. "sitting"
const string2 = "The child was sitting on the table before it fell"
console.log(string2.indexOf("sitting"))

// Convert the following strings into the specified format:
// 1. UpperCase: "wonderful"
let affirm = "Wonderful";
let results = affirm.toUpperCase();
console.log(results)
// 2. LowerCase: "amazing", "BEneath"
let compliment = "amazing";
let compliments = "BEneath";
console.log(compliment.toLowerCase(), compliments.toLowerCase());

// 3. Title case "A beautiful wedding"


function titleCase(string) {
    var statement = string.toLowerCase().split(" ");
    for(var i = 0; i< statement.length; i++){
       statement[i] = statement[i][0].toUpperCase() + statement[i].slice(1);
    }
 document.write(statement.join(" "));
 return statement;
 }
 titleCase("A beautiful Wedding");

