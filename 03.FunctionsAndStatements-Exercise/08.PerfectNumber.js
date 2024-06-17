function solve(num) {

    function getProperDivisors(num) {
        let properDivisors = [];
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                properDivisors.push(i);
            }
        }

        return properDivisors;
    }

    function printNumberInfo(num, properDivisors){
        let sum = properDivisors.reduce(
            (accumolator, currentValue) => accumolator + currentValue,
             0);;
       

        if (sum == num) {
            console.log('We have a perfect number!');
        }else{
            console.log('It\'s not so perfect.');
        }
    }

    let properDivisors = getProperDivisors(num);
    printNumberInfo(num, properDivisors);
    
}

solve(6);