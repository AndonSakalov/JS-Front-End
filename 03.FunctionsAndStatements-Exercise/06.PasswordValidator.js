function solve(password) {

    passwordValidator(password);

    function passwordValidator(password) {
        let isValid = true;
        if (password.length < 6 || password.length > 10) {
            isValid = false;
            console.log('Password must be between 6 and 10 characters');
        }

        if (!consistsOfDigitsAndLettersOnly(password)) {
            isValid = false;
            console.log('Password must consist only of letters and digits');
        }

        if (!hasAtleastTwoDigits(password)) {
            isValid = false;
            console.log('Password must have at least 2 digits');
        }

        if (isValid === true) {
            console.log('Password is valid');
        }
    }

    function hasAtleastTwoDigits(password) {
        let digitCount = 0;
        for (let i = 0; i < password.length; i++) {
            if (isDigit(password[i])) {
                digitCount++;
            }
        }

        return digitCount >= 2;
    }

    function consistsOfDigitsAndLettersOnly(password) {
        for (let i = 0; i < password.length; i++) {
            if (isDigit(password[i]) === false && isLetter(password[i]) === false) {
                return false;
            }
        }

        return true;
    }

    function isDigit(character) {
        let charCode = character.charCodeAt(0);
        if (charCode >= 48 && charCode <= 57 && character.length === 1) {
            return true;
        }

        return false;
    }

    function isLetter(character) {
        let charCode = character.charCodeAt(0);
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90) && character.length === 1) {
            return true;
        }

        return false;
    }
}

