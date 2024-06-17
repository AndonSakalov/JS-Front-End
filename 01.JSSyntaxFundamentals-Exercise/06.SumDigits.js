function solve(number){
    let stringNum = number.toString();
    let sum = 0;
    for (let i = 0; i < stringNum.length; i++) {
       sum += number % 10;
       number = Math.floor(number / 10); 
    }
    console.log(sum);
}


solve(245678);
solve(97561);
solve(543);

