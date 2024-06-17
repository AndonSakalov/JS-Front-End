function solve(nums){
    let sortedNums =[];
    nums.sort((a, b) => a - b);

    while (nums.length > 0) {
        sortedNums.push(nums.shift());
        sortedNums.push(nums.pop());
    }

    return(sortedNums);
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(3);