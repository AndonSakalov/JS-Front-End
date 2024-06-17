function solve(num1, num2) {

    function getFactorial(num) {
        let factorial = num;

        for (let i = num - 1; i > 0; i--) {
            factorial = factorial * i;
        }

        return factorial;
    }

    let factorial1 = getFactorial(num1);
    let factorial2 = getFactorial(num2);

    console.log((factorial1 / factorial2).toFixed(2));
}