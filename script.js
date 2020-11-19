var generateBtn = document.querySelector("#generate");

var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArr =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArr = ["0","1","2","3","4","5","6","7","8","9"];
var specialArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input

function generatePassword() {
  var passwordLength = parseInt(window.prompt('How many characters would you like your password to be? Range: 8-128 characters'));
  var uppers = window.confirm('Would you like your password to contain uppercase letters?');
  var lowers = window.confirm('Would you like your password to contain lowercase letters?');
  var numbers = window.confirm('Would you like your password to contain numbers?');
  var specials = window.confirm('Would you like your password to contain special characters?');
  var combine = [];
  var randomString = "";

  if (uppers) {
    for (var i = 0; i < upperArr.length; i++) {
      combine.push(upperArr[i])
    }
  }

  if (lowers) {
    for (var i = 0; i < lowerArr.length; i++) {
      combine.push(lowerArr[i])
    }
  }

  if (numbers) {
    for (var i = 0; i < numberArr.length; i++) {
      combine.push(numberArr[i])
    }
  }

  if (specials) {
    for (var i = 0; i < specialArr.length; i++) {
      combine.push(specialArr[i])
    }
  }

  if (!uppers && !lowers && !numbers && !specials) {
    window.alert ('Error, you must include at least one category, please try again.')
    return 'Password could not be generated.';
  }
  else if ((passwordLength<8) || (passwordLength>128)) {
    window.alert ('Error, password must be between 8 and 128 characters, please try again.')
    return 'Password could not be generated.';
  }
  else {
    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * combine.length);
      var randomCharacter = combine[randomNumber];
      randomString += randomCharacter;
      console.log(randomString)
    }
    return randomString;
  } 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
