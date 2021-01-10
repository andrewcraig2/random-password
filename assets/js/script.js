// Assignment code here
function generatePassword() {
  var chooseLower = confirm("Do you want lower case")
  var chooseUpper = confirm("Do you want upper case")
  var chooseNumber = confirm ("Do you want numbers")
  var chooseSymbol = confirm ("Do you want symbols")
  var upperArray  = "ABCDEFGHIJKLMNOPQRSTUYWXYZ".split("")
  var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("")
  var numberArray = "0123456789".split("")
  var symbolArray = "!&*$#{}=+@()?".split("")
  var choosePassLength = prompt("How long do you want password?")
  choosePassLength = parseInt(choosePassLength)
  var userChosenArray = []
  
  if(chooseUpper) {
    for (let index = 0; index < upperArray.length; index++) {
      const element = upperArray[index];
      userChosenArray.push(element);
  }
}
 if(chooseLower) {
   for (let index = 0; index < lowerArray.length; index++)  {
     const element = lowerArray[index];
     userChosenArray.push(element);
   }
 }

 if(chooseNumber) {
  for (let index = 0; index < numberArray.length; index++)  {
    const element = numberArray[index];
    userChosenArray.push(element);
  }
}
  if (chooseSymbol) {
  for (let index = 0; index < symbolArray.length; index++) {
    const element = symbolArray[index];
    userChosenArray.push(element)
  }
  console.log(userChosenArray)
}
var createPassword = ""
  for (let index = 0; index < choosePassLength; index++) {
    var randomIndex = Math.floor(Math.random() * userChosenArray.length)
    createPassword += userChosenArray[randomIndex]
  }
  return createPassword
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
