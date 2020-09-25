// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//i started messing about here
function generatePassword() {

  var isValid = false;

  do {
    //set variable for user's chosen password length
    var passL = prompt("Choose a password length between 8 and 128 characters.");
    passL = parseInt(passL);

    //if the password is lower than 8 or higher than 128 characters, tell them they must choose a number between the range, inclusive
    if ((passL < 8) || (passL > 128) || (isNaN(passL))) {
      alert("You must choose a number between 8 and 128, including 8 and 128");
    }
    else
      isValid = true;

  } while (!isValid);



  //variables for character types the user can choose to have in their password
  var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var spec = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  isValid = false;
  do { //set variables for each confirmation or denial from the user
    var lowerP = confirm("Would you like to use lowercase letters in your password?");
    var upperP = confirm("Would you like to use uppercase letters in your password?");
    var numP = confirm("Would you like to use numbers in your password?");
    var specP = confirm("Would you like to use special characters in your password?");
    //if the user denies using any character type, tell them they must select at least one
    if ((lowerP == false) && (upperP == false) && (numP == false) && (specP == false)) {
      alert("At least one character type must be selected to be in your password!");
    }
    else
      isValid = true;

  } while (!isValid);

  var passArray = [];
  var returnVar = "";

  //putting the character types the user selects into a new array from which a password will be generated
  if (lowerP == true) {
    for (var i of alpha) {
      passArray.push(i.toLowerCase());
    }
  }
  if (upperP == true) {
    for (var i of alpha) {
      passArray.push(i.toUpperCase());
    }
  }
  if (numP == true) {
    for (var i of num) {
      passArray.push(i);
    }
  }
  if (specP == true) {
    for (var i of spec) {
      passArray.push(i);
    }
  }
//make sure the password array holding the password has as many characters as the user chose
  for (var i = 0; i < passL; i++)
    returnVar += passArray[Math.floor(Math.random() * passArray.length)];

  return returnVar;

}

//i stopped messing about here

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//me again talking it through
//when the user presses the generate password button
//a series of boxes pop up
//the first box is a prompt asking how many characters they would like in their password, between 8 and 128
//the rest are asking what types of characters they would like in their password
//if they don't choose any types, an alert lets them know they have to choose at least one type
//after they make their choices
//grab all the types of characters they desire
//and put them all together
//randomly choose a number of characters from this list, said number should be the number of characters they want in their password
//show the password 