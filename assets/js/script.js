// Single Character Type Arrays
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "0", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];

// Lower Character Type Arrays
var lowerUpper = [...alphabetLower, ...alphabetUpper];
var lowerNumbers = [...alphabetLower, ...numbers];
var lowerSpecial = [...alphabetLower, ...special];

var lowerUpperNumbers = [...alphabetLower, ...alphabetUpper, ...numbers];
var lowerUpperSpecial = [...alphabetLower, ...alphabetUpper, ...special];
var lowerNumbersSpecial = [...alphabetLower, ...numbers, ...special];

// Upper Character Type Arrays
var upperNumbers = [...alphabetUpper, ...numbers];
var upperSpecial = [...alphabetUpper, ...special];

var upperNumbersSpecial = [...alphabetUpper, ...numbers, ...special];

// Numbers Chracter Type Arrays
var numbersSpecial = [...numbers, ...special];

// Combined Character Type Arrays
var combined = [...alphabetLower, ...alphabetUpper, ...numbers, ...special];

// object to store user's password choices
var password = {
  charLength: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false,
  pw: "",
  reset: function () {
    this.charLength = 0;
    this.lowercase = false;
    this.uppercase = false;
    this.numeric = false;
    this.special = false;
    this.pw = "";
  }
}

// generates a random number to randomly select the password characters based on the appropriate array.
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

// sets the number of characters the user wants their password to be.
var passwordLength = function () {
  var charLength = window.prompt('How many characters do you want your password to be? (8 - 24 characters)');
  password.charLength = parseInt(charLength);

  if (password.charLength < 8 || password.charLength > 24) {
    window.alert("Please enter in a value of 8 - 24 characters.");
    passwordLength();
  } else {
    findCharType();
  }
}

// allows the user to pick the character types they want in the their password. then updates the object to reflect their choices.
var findCharType = function () {
  var charType = window.prompt('What character types would you like to include in your password? (Type: "lowercase", "uppercase", "numeric", "special characters"');
  var charTypeValue = charType.toLowerCase();

  if (charTypeValue === 'lowercase') {
    password.lowercase = true;
  } else if (charTypeValue === 'uppercase') {
    password.uppercase = true;
  } else if (charTypeValue === 'numeric') {
    password.numeric = true;
  } else if (charTypeValue === 'special characters') {
    password.special = true;
  } else {
    window.alert("Please enter in a correct character type.");
  }

  var moreChar = window.confirm("Do you include other character types?");
  if (moreChar) {
    if (password.lowercase === true && password.uppercase === true && password.numeric === true && password.special === true) {
      window.alert("You have picked all the possible character types");
      generatePassword();
    } else {
      findCharType();
    }
  } else generatePassword();
}

// goes through all the different character type options the user can pick from and picks the array based on their choices.
var generatePassword = function () {
  if (password.lowercase === true && password.uppercase === false && password.numeric === false && password.special === false) {
    for (var i = 0; i < password.charLength; i++) {
      var randomLower = randomNumber(1, alphabetLower.length) - 1;
      password.pw += alphabetLower[randomLower];
    }
  } else if (password.lowercase === false && password.uppercase === true && password.numeric === false && password.special === false) {
    for (var i = 0; i < password.charLength; i++) {
      var randomUpper = randomNumber(1, alphabetUpper.length) - 1;
      password.pw += alphabetUpper[randomUpper];
    }
  } else if (password.lowercase === false && password.uppercase === false && password.numeric === true && password.special === false) {
    for (var i = 0; i < password.charLength; i++) {
      var randomNumbers = randomNumber(1, numbers.length) - 1;
      password.pw += numbers[randomNumbers];
    }
  } else if (password.lowercase === false && password.uppercase === false && password.numeric === false && password.special === true) {
    for (var i = 0; i < password.charLength; i++) {
      var randomSpecial = randomNumber(1, special.length) - 1;
      password.pw += special[randomSpecial];
    }
  } else if (password.lowercase === true && password.uppercase === true && password.numeric === false && password.special === false) {
    for (var i = 0; i < password.charLength; i++) {
      var randomLowerUpper = randomNumber(1, lowerUpper.length) - 1;
      password.pw += lowerUpper[randomLowerUpper];
    }
  } else if (password.lowercase === true && password.uppercase === false && password.numeric === true && password.special === false) {
    for (var i = 0; i < password.charLength; i++) {
      var randomlowerNumbers = randomNumber(1, lowerNumbers.length) - 1;
      password.pw += lowerNumbers[randomlowerNumbers];
    }
  } else if (password.lowercase === true && password.uppercase === false && password.numeric === false && password.special === true) {
    for (var i = 0; i < password.charLength; i++) {
      var randomlowerSpecial = randomNumber(1, lowerSpecial.length) - 1;
      password.pw += lowerSpecial[randomlowerSpecial];
    }
  } else if (password.lowercase === true && password.uppercase === true && password.numeric === true && password.special === false) {
    for (var i = 0; i < password.charLength; i++) {
      var randomlowerUpperNumbers = randomNumber(1, lowerUpperNumbers.length) - 1;
      password.pw += lowerUpperNumbers[randomlowerUpperNumbers];
    }
  } else if (password.lowercase === true && password.uppercase === true && password.numeric === false && password.special === true) {
    for (var i = 0; i < password.charLength; i++) {
      var randomlowerUpperSpecial = randomNumber(1, lowerUpperSpecial.length) - 1;
      password.pw += lowerUpperSpecial[randomlowerUpperSpecial];
    }
  } else if (password.lowercase === true && password.uppercase === false && password.numeric === true && password.special === true) {
    for (var i = 0; i < password.charLength; i++) {
      var randomlowerNumbersSpecial = randomNumber(1, lowerNumbersSpecial.length) - 1;
      password.pw += lowerNumbersSpecial[randomlowerNumbersSpecial];
    }
  } else if (password.lowercase === false && password.uppercase === true && password.numeric === true && password.special === false) {
    for (var i = 0; i < password.charLength; i++) {
      var randomUpperNumbers = randomNumber(1, upperNumbers.length) - 1;
      password.pw += upperNumbers[randomUpperNumbers];
    }
  } else if (password.lowercase === false && password.uppercase === true && password.numeric === false && password.special === true) {
    for (var i = 0; i < password.charLength; i++) {
      var randomUpperSpecial = randomNumber(1, upperSpecial.length) - 1;
      password.pw += upperSpecial[randomUpperSpecial];
    }
  } else if (password.lowercase === false && password.uppercase === true && password.numeric === true && password.special === true) {
    for (var i = 0; i < password.charLength; i++) {
      var randomUpperNumbersSpecial = randomNumber(1, upperNumbersSpecial.length) - 1;
      password.pw += upperNumbersSpecial[randomUpperNumbersSpecial];
    }
  } else if (password.lowercase === false && password.uppercase === false && password.numeric === true && password.special === true) {
    for (var i = 0; i < password.charLength; i++) {
      var randomNumbersSpecial = randomNumber(1, numbersSpecial.length) - 1;
      password.pw += numbersSpecial[randomNumbersSpecial];
    }
  } else {
    for (var i = 0; i < password.charLength; i++) {
      var randomCombined = randomNumber(1, combined.length) - 1;
      password.pw += combined[randomCombined];
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  password.reset();

  passwordLength();
  passwordText.value = password.pw;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
