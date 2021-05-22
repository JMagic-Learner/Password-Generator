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

var criteria ="";

var criteria2 ="";

var passwordTest= [];

var wantSpecial = "";

var wantNumbers = "";



// This is the meat and potatoes of the javascript logic. 
function trueRAND() {

// These variables below determine the random sequencing of arrays choices
  var randomLower= Math.floor(Math.random() * 26);
  var randomUpper= Math.floor(Math.random() * 26);
  var randomNumber= Math.floor(Math.random() * 10);
  var randomSpecial= Math.floor(Math.random() * 10);

// RandomArray then stores 4 random array positions, corresponding to each of the global variables.
  var randomArray=[ 
    lowercaseAlphabet[randomLower], 
    uppercaseAlphabet[randomUpper],
    numberSeries[randomNumber],
    specialSeries[randomSpecial],
  ]

// chooseOne then randomly selects which of the above 4 are going to be put in. This random sequencing
// allows either a lower case , upper case, number or special character to be given equal chance of being selected
// into the final password.
var chooseOne = Math.floor(Math.random() * 4);

// These below if statements allow the passwordTest to have strings "pushed" on.
// also allows the user to have "conditions", or selectively exclude a character type from the final password result

if (chooseOne == 0) {
  console.log(randomLower);
  console.log("The computer has chosen array 0 " + lowercaseAlphabet[randomLower] +" for the first symbol");
  passwordTest.push( lowercaseAlphabet[randomLower] );
  
  
} else if (chooseOne == 1) {
  console.log(randomUpper);
  passwordTest.push( uppercaseAlphabet[randomUpper] );
  console.log("the compuer has chosen array 1 " + uppercaseAlphabet[randomUpper] + " for the first symbol");
  
  
} else if (chooseOne == 2 && wantNumbers.toLowerCase == "yes") {
  console.log(randomNumber);
  console.log("the computer has chosen array 2 " + numberSeries[randomNumber] + " for the first symbol");
  passwordTest.push( numberSeries[randomNumber] );
  
} else if (chooseOne == 3 && wantSpecial.toLowerCase == "yes") {
  console.log(randomSpecial);
  console.log("the computer has chosen array 4 " + specialSeries[randomSpecial] + " for the first symbol");
  passwordTest.push( specialSeries[randomSpecial] );
 
  
}

return;
}









// the first prompt is simple. It asks for desired password length between 8 and 128.
// If it isn't a number between those values, it forces the user back to the first prompt;
function firstPrompt() {
  var length = prompt("Enter the length of your password. Then press ok to continue.");
  
  if (length <= 128 && length >= 8) {
    prompt("The password length you chose is " + length+ ".");
    passwordMax = length;
    secondPrompt();
  } else {
    prompt("You didn't enter a valid number, press ok");
    firstPrompt();
  }

}

// second prompt refines the desierd password. it allows the user to choose the first character of the password.
// these prompts feed into trueRAND(), giving conditional statements.

function secondPrompt() {
  criteria = prompt("Type the first character you want in the password. Then press ok to continue.");

  prompt("the character you chosen is " + criteria + ". The length of your password is " + passwordMax + ". Then press ok to continue.");

  wantSpecial = prompt("Type yes or no if you want special characters in your password.");

  wantNumbers = prompt("Type yes or no if you want numbers in your password");

  thirdPrompt();

}

/* We dont deal with these pre-existing JS code.

 function generatePassword() {
  var passwordMax = length;
  while( passwordTest.length <= passwordMax) {
   trueRAND;
    }    
  */ }


// Write password to the #password input
// function writePassword() {

 
/*   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/

// third prompt is kinda eh. Just another criteria to make sure you actually have more than just letters.
function thirdPrompt() {
  var numberRequirement = prompt("You need one number in your password. Enter below");
  var temporary = parseInt(numberRequirement);
      if (Number.isInteger(temporary) === true) {
      prompt("Good deal bro, you chose a number. Press ok to continue");
        criteria2 = numberRequirement;
      writeThis();
} else {
  prompt("You didn't enter a valid number, press ok");
  thirdPrompt();
}
}


// Aight, here we go. It feeds criteria and criteria2. While the array, passwordTest is less in length than
// passwordMax, it continues to generate random numbers that append to the array.
// Var passwordText grabs the password ID, allowing the password to be generated inside the box
function writeThis() {

  while( passwordTest.length <= passwordMax) {
  trueRAND();
  }
  var passwordText = document.querySelector("#password");
  passwordTest[0] = criteria;
  passwordTest[1] = criteria2;
  passwordText.value = ( passwordTest.join(""));
  passwordTest=[];
  }
  


// Add event listener to generate button
generateBtn.addEventListener("click", firstPrompt);






