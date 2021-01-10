// Assignment code here
function generatePassword() {
  var chooseLowerCase = confirm("Would you like lower case")
  var chooseUpperCase = confirm("Would you like upper case")
  var chooseNumbers = confirm ("would you like numbers")
  var chooseSymbol = confirm ("would you like symbols")
  var upperCaseArray  = "ABCDEFGHIJKLMNOPQRSTUYWXYZ".split("")
  var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("")
  var numberArray = "0123456789".split("")
  var symbolArray = "!&*$#{}=+@()?".split("")
  var choosePassLength = prompt("How long do you want password?")
  choosePassLength = parseInt(choosePassLength)
  var userChosenArray = []

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
