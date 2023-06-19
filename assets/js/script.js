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
