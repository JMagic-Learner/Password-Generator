// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseAlphabet = 
["a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m" , "n" ,"o", "p", "q", "r", "s", "w", "t", "u", "v", "x", "y", "z"];

var uppercaseAlphabet =
["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M" , "N" ,"O", "P", "Q", "R", "S", "W", "T", "U", "V", "X", "Y", "Z"];

var numberSeries = 
["0", "1" , "2", "3", "4", "5", "6", "7", "8", "9" ];

var specialSeries =
[ "!" , "@" , "#" , "$" , "%" , "^" ,"&" , "*" , "(" , ")"];

var passwordMax = 8;

var length = "";


var passwordTest= [];


function trueRAND() {

  var randomLower= Math.floor(Math.random() * 26);
  var randomUpper= Math.floor(Math.random() * 26);
  var randomNumber= Math.floor(Math.random() * 10);
  var randomSpecial= Math.floor(Math.random() * 10);

  var randomArray=[ 
    lowercaseAlphabet[randomLower], 
    uppercaseAlphabet[randomUpper],
    numberSeries[randomNumber],
    specialSeries[randomSpecial],
  ]


var chooseOne = Math.floor(Math.random() * 4);


if (chooseOne == 0) {
  console.log(randomLower);
  console.log("The computer has chosen array 0 " + lowercaseAlphabet[randomLower] +" for the first symbol");
  passwordTest.push( lowercaseAlphabet[randomLower] );
  
} else if (chooseOne == 1) {
  console.log(randomUpper);
  passwordTest.push( uppercaseAlphabet[randomUpper] );
  console.log("the compuer has chosen array 1 " + uppercaseAlphabet[randomUpper] + " for the first symbol");
  
} else if (chooseOne == 2) {
  console.log(randomNumber);
  console.log("the computer has chosen array 2 " + numberSeries[randomNumber] + " for the first symbol");
  passwordTest.push( numberSeries[randomNumber] );

} else if (chooseOne == 3) {
  console.log(randomSpecial);
  console.log("the computer has chosen array 4 " + specialSeries[randomSpecial] + " for the first symbol");
  passwordTest.push( specialSeries[randomSpecial] );
  
}

return;
}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function firstPrompt() {
  length = prompt("Enter the length of your password");
  if (length <= 123) {
    prompt("the number you chose is " + length);
    secondPrompt();
  } else {
    prompt("You didn't enter a valid number");
  }

  
}

function secondPrompt() {
  var criteria = prompt("Enter in the first character of your password. ");
  prompt("the character you chosen is" + criteria);
  
}

function thirdPrompt() {
  

}



function writeThis() {

while( passwordTest.length <= passwordMax) {
trueRAND();
}
var passwordText = document.querySelector("#password");
passwordText.value = ( passwordTest[0] + passwordTest[1] + passwordTest[2] + passwordTest[3] + passwordTest[4] + passwordTest[5] + passwordTest[6] + passwordTest[7]);
passwordTest=[];
}


// Add event listener to generate button



generateBtn.addEventListener("click", firstPrompt);






