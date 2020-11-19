var generateBtn = document.querySelector("#generate");

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
var passwordLength = window.prompt('How many characters would you like your password to be? Range: 8-128 characters');
var uppers = window.confirm('Would you like your password to contain uppercase letters?');
var lowers = window.confirm('Would you like your password to contain lowercase letters?');
var numbers = window.confirm('Would you like your password to contain numbers?');
var specials = window.confirm('Would you like your password to contain special characters?');

function generateArray() {

}
 
generateArray();

function generatePassword() {
  var passwordLength = 8
  var combine = upper.concat(lower,number,special)
  var randomCharacter = [];
  for (var i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * combine.length);
  var randomCharacter = combine[randomNumber];
  }
  return randomCharacter;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
