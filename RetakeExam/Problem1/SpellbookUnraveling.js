function solve(input) {

    let code = input.shift();

    let currentCommand = input.shift();
    while (currentCommand !== 'End') {
        let command = currentCommand.split('!');
        switch (command[0]) {
            case 'RemoveEven':
                let copy = '';
                for (let i = 0; i < code.length; i++) {
                    if (i % 2 === 0) {
                        copy += (code[i]);
                    }
                }
                code = copy;
                console.log(code);
                break;
            case 'TakePart':
                let startingIndex = Number(command[1]);
                let endIndex = Number(command[2]);

                let substr = code.substring(startingIndex, endIndex);
                code = substr;
                console.log(code);
                break;
            case 'Reverse':
                let substring = command[1];
                if (code.includes(substring)) {
                    let indexOfSubStr = code.indexOf(substring);
                    code = code.substring(0, indexOfSubStr) + code.substring(indexOfSubStr + substring.length);

                    let subCopy = '';
                    for (let i = substring.length - 1; i >= 0; i--) {
                        subCopy += substring[i];
                    }

                    code += subCopy;
                    console.log(code);
                } else {
                    console.log('Error');
                }
                break;

            default:
                break;
        }

        currentCommand = input.shift();
    }

    console.log(`The concealed spell is: ${code}`);

}

solve((["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])
);
console.log('===============================')

solve((["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])
);