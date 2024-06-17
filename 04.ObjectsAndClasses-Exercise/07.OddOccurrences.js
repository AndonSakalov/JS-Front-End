function solve(input) {
    let words = input.split(' ');
    let wordsCount = {};
    for (const currentWord of words) {
        let caseInsensitiveWord = currentWord.toLowerCase();
        if (wordsCount.hasOwnProperty(caseInsensitiveWord)) {
            wordsCount[caseInsensitiveWord]++;
        } else {
            wordsCount[caseInsensitiveWord] = 1;
        }
    }
    let filteredWords = Object.entries(wordsCount).filter(([k, v]) => v % 2);

    let filteredObject = Object.fromEntries(filteredWords);
    let result = '';
    for (const key in filteredObject) {
         result += key + ' ';
    }

    console.log(result.trim())
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');
console.log(`done`)