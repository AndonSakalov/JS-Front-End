function solve(elementCount, arr){
    let workingArr = arr.slice(0,elementCount);
    workingArr.reverse();
    console.log(workingArr.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
console.log('done');
