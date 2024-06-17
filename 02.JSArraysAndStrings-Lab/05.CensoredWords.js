function solve(str, censoredWord){
    let pattern = new RegExp(censoredWord, 'g');
    let resultString = str.replace(pattern, '*'.repeat(censoredWord.length));
    console.log(resultString);
}

solve('A small sentence with some words',
'small');