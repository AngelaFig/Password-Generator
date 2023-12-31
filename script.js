// Assignment Code
// Add all possible choices
let upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let specialCharacters = ["!", "@", "#", "$","%","^","&","*","(",")","-","_","=","+","~"]
let numbers = ["0","1","2","3","4","5","6","7","8","9"]
var generateBtn = document.querySelector("#generate");

// testing
// console.log(generateBtn);

function generatePassword() {
  let passwordLength = prompt("Enter the Length of Password");
  if(passwordLength < 8 || passwordLength >= 128) {
    alert("Please Enter Password Between 8-128 Characters");
    generatePassword()
  }
  let confirmUpperCase = confirm("Do you Want UpperCase Characters? ");
  let confirmLowerCase = confirm("Do you want LowerCase? ");
  let confirmSpecialCharacter = confirm("Do you want Special Characters? ");
  let confirmNumber = confirm("Do you want Numbers? ");
  // if all confirm false then alert to choose at least one confirm & call generatePassword()
  
  let finalArray = []
  if(confirmUpperCase === true) {
    finalArray = finalArray.concat(upperCaseCharacters)
  } 
  if(confirmLowerCase === true) {
    finalArray = finalArray.concat(lowerCaseCharacters)
  }
  if(confirmSpecialCharacter === true) {
    finalArray = finalArray.concat(specialCharacters)
  }
  if(confirmNumber === true) {
    finalArray = finalArray.concat(numbers)
  }
  if(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumber === false) {
    alert("Choose at least ONE of the presented criteria");
    generatePassword()
  }

  let randomPassword = ""
  for(i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * finalArray.length) 
    let randomCharacter = finalArray[randomIndex]
    randomPassword = randomPassword + randomCharacter
  }
  console.log(randomPassword)
  return randomPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// When click, must receive prompts for password criteria
// user then selects password criteria they want to use
// must choose length btw 8 and 128 characters
// user confirm whether to include lowercase, uppercase, numeric, and or special charcters