// Assignment code here


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

// This function will generate a random password
      function generatePassword() {
        var length = getPasswordLength();
        var charSet = getCharacterSet();
        var password = "";

        for (var i = 0; i < length; i++) {
          var randomIndex = Math.floor(Math.random() * charSet.length);
          password += charSet[randomIndex];
        }

        return password;
      }

// Prompt for password length choosing a number between 8 and 128 characters. User must choose or an Invalid message is prompted
function getPasswordLength() {
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid input! Please enter a valid length (between 8 and 128 characters):"));
  }

  return length;
}
