function solve(text){
    let regex = new RegExp("[A-Z][a-z]*", 'g');
    let matches = text.match(regex);
    if (matches !== null) {
        let result = matches.join(', ');
        console.log(result);
    }
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');