function solve(word,text){
    let reg = `\\b${word}\\b`;
    let regex = new RegExp(reg, 'i');
    let matches = text.match(regex);
    if (matches !== null) {
        console.log(matches[0].toLowerCase());
    }else{
        console.log(`${word} not found!`);
    }
}

solve('javascript',
'JavaScript is the best programming language'
);