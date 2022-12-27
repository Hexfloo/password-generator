
const passwordLengthRange = document.getElementById("passwordLengthRange");
const passwordLengthNumber = document.getElementById("passwordLengthNumber");
const includeUpper = document.getElementById("includeUpper");
const includeNumbers = document.getElementById("includeNumbers");
const includeSpecialChars = document.getElementById("includeSpecialChars");
const passwordDisplay = document.getElementById("passwordDisplay");
const passwordGeneratorForm = document.getElementById("passwordGeneratorForm");
const copyButton = document.getElementById("copyButton");


/* Linking between range and number input for password length */
passwordLengthNumber.addEventListener("input", syncPasswordLength);
passwordLengthRange.addEventListener("input", syncPasswordLength);

const UPPERCASE_CODES = createCharArray(65, 90);
const LOWERCASE_CODES = createCharArray(97, 122);
const NUMBERS_CODES = createCharArray(48, 57);
const SPECIALS_CODES = createCharArray(33, 47).concat(createCharArray(60, 64));

passwordGeneratorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const passwordLength = passwordLengthNumber.value;
    const isUppercase = includeUpper.checked;
    const isNumbers = includeNumbers.checked;
    const isSpecials = includeSpecialChars.checked;
    const password = generatePassword(passwordLength, isUppercase, isNumbers, isSpecials);
    passwordDisplay.innerText = password;
})

/* Copy password when icon clicked */
copyButton.addEventListener("click", () => {
    password = passwordDisplay.innerText;
    navigator.clipboard.writeText(password).then(() => {
        console.log("Copied password");
    }, () => {
        console.log("Failed to copy password");
    })
});

/* Password generation */
function generatePassword(passwordLength, isUppercase, isNumbers, isSpecials) {
    let allCharCodes = LOWERCASE_CODES;
    if (isUppercase) allCharCodes = allCharCodes.concat(UPPERCASE_CODES);
    if (isNumbers) allCharCodes = allCharCodes.concat(NUMBERS_CODES);
    if (isSpecials) allCharCodes = allCharCodes.concat(SPECIALS_CODES);

    const passwordCharacters = []
    for (let i = 0; i < passwordLength; i++) {
        const charCode = allCharCodes[Math.floor(Math.random() * allCharCodes.length)];
        passwordCharacters.push(String.fromCharCode(charCode));
    }
    return passwordCharacters.join("");
}

/* Creates array of all ASCII values between range given */
function createCharArray(low, high) {
    const charArray = [];
    for (let i = low; i <= high; i++) {
        charArray.push(i);
    }
    return charArray;
}

function syncPasswordLength(event) {
    const newValue = event.target.value;
    passwordLengthNumber.value = newValue;
    passwordLengthRange.value = newValue;
}

