// Assignment Code
var generateBtn = document.querySelector("#generate");

// testing
// console.log(generateBtn);
// note to self console error-generate password not defined

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// testing
writePassword();
// seems that generatePassword() line 10 not defined

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// not sure how to test the event listener