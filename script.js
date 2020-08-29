// Constants
const generateBtn = document.querySelector("#generate");
let upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerValues = "abcdefghijklmnopqrstuvwxyz";
let numValues = "1234567890";
let specValues = "~!@#$%^&*(),./";
let lengthOfPW = 0;

let charsToUse = "";
let password = "";


// Functions



/*
 * writes a generated password to the #password
 */
function reset() {
    password = "";
    charactersToUse = "";
    lengthofPW = 0;



}




function correctLength() {
    const howLong = window.prompt("Enter how many characters (Between 8 and 128)");
    if (howLong > 7 && howLong < 129) {
        lengthOfPW = howLong;

    }
    else {
        alert("Thats not correct length");
        correctLength();
    }

    // const upperChars
}




function upperConfirm() {
    const confUpper = confirm("Would you like to use uppercase letters?");
    if (confUpper) {
        charsToUse += upperValues;
    }

}




function lowerConfirm() {
    const confLower = confirm("Would you like to use lowercase letters?");
    if (confLower) {
        charsToUse += lowerValues;
    }

}



function numbConfirm() {
    const confNumb = confirm("Would you like to use numbers?");
    if (confNumb) {
        charsToUse += numValues;
    }

}



function specialConfirm() {
    const confSpecial = confirm("Would you like to use special characters?");
    if (confSpecial) {
        charsToUse += specValues;
    }

}



function writePassword() {


    generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



/**
 * generate a password based on certain criteria
 */
function generatePassword() {
    reset();
    correctLength();
    upperConfirm();
    lowerConfirm();
    numbConfirm();
    specialConfirm();

    for (i = 0; i < lengthOfPW; i++) {
        let randomInt = getRandomInt(charsToUse.length);
        password += charsToUse.charAt(randomInt);
    }
    // Password is currently blank! We need to make a better one




    // Main Process



    // Add event listener to generate button

}
generateBtn.addEventListener("click", writePassword);