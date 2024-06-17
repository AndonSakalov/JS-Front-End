function solve(ch1, ch2){

    let ch1UniCode = ch1.charCodeAt(0);
    let ch2UniCode = ch2.charCodeAt(0);

    if (ch1UniCode > ch2UniCode) {
        printCharsInRange(ch1UniCode, ch2UniCode)
    }else if(ch2UniCode > ch1UniCode){
        printCharsInRange(ch2UniCode, ch1UniCode)

    }

    function printCharsInRange(biggerChar, smallerChar){
        let result = '';
        for (let i = smallerChar + 1; i < biggerChar; i++) {
            result += String.fromCharCode(i) + ' ';
        }

        console.log(result.trim());
    }
}

solve('a',
'd'
);