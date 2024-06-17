function solve(text){
    let regex = /#\b[A-Za-z]+\b/g;
    let matches = text.match(regex);
    for (let i = 0; i < matches.length; i++) {
        let currentWord = matches[i];
        console.log(currentWord.substring(1,currentWord.length));
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
