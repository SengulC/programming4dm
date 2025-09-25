//  Create a set of variables
//  Think about the names you give them and what value they hold
//  Change the values of some of your variables
//  Create an array with 5 items, list the second and third items

let pickle1 = "gherkin";
let pickle2 = "kimchi";
let pickle3 = "pepper";

let pickles = [pickle1, pickle2, pickle3, "cabbage", "daikon"];
console.log(pickles[1], pickles[2]);

pickle3 = "hot " + pickle3;

// Create a variable playerScore
//  Create a function that adds one to the playerScore variable (like the
// player score or computer score we created last week in scratch) every
// time the function is called
//  Create a function that displays the value of the playerScore variable

let playerScore = 0;
function addToPlayerScore() {
    playerScore++;
};
addToPlayerScore();

function returnPlayerScore() {
    console.log(playerScore);
};
returnPlayerScore();

// Check if the playerScore value you created is odd or even
// // you can use % which gives you a 'rest' value
//  If it's odd display a different message than when it's even
function isItEven(){
    if (playerScore%2 == 0)
        console.log("It's even");
    else 
        console.log("It's odd");
}
isItEven();