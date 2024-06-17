function solve(words, text){
    let wordsToReplace = words.split(', ');
    let textArr = text.split(' ');

    for (let i = 0; i < textArr.length; i++) {
        let currentWord = textArr[i];
        if (currentWord.includes('*')) {
            for (const word of wordsToReplace) {
                if (word.length == currentWord.length) {
                    textArr[i] = word;
                }
            }
        }
    }

    let result = textArr.join(' ');
    console.log(result);
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');
console.log('done');