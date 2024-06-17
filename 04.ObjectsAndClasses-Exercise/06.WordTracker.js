//find and some

function solve(input) {
    let wordsToSearch = input[0].split(' ');
    let dict = {};
    for (const word of wordsToSearch) {
        dict[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        if (dict.hasOwnProperty(input[i])) {
            dict[input[i]]++;
        }
    }

    dictArr = Object.entries(dict).sort((a, b) => (a[1])>(b[1]) ? -1 : (a[1]< b[1]) ? 1 : 0);
    dictObj = Object.fromEntries(dictArr);

    for (const key in dictObj) {
        console.log(`${key} - ${dictObj[key]}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );