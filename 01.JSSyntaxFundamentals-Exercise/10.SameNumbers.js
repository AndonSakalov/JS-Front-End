function solve(number){
    let stringNum = number.toString();
    let areEqual = true;
    let sum = 0;
    for (let i = 0; i < stringNum.length; i++) {
        if (i != stringNum.length - 1 && stringNum[i] != stringNum[i + 1] ) {
            areEqual= false;
        }
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    console.log(areEqual);
    console.log(sum);
}

solve(1234);