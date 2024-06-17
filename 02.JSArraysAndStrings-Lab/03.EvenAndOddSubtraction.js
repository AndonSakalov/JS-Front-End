function solve(arr){
    let oddNumbersArr = arr.filter(x => x % 2 != 0);
    let evenNumbersArr = arr.filter(x => x % 2 == 0);
    let oddNumbersSum = 0;
    let evenNumbersSum = 0;
    for (const evenNum of evenNumbersArr) {
        evenNumbersSum += evenNum;
    }
    for (const oddNum of oddNumbersArr) {
        oddNumbersSum += oddNum;
    }
    console.log(evenNumbersSum - oddNumbersSum);
}

solve([1,2,3,4,5,6]);
console.log(3);