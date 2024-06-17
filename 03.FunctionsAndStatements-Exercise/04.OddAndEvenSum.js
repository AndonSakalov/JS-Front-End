function solve(num) {

    printOddAndEvenSumsFromNumberDigits(num);

    function printOddAndEvenSumsFromNumberDigits(num) {
        let evenSum = 0;
        let oddSum = 0;
        
        while (num != 0 ) {
            let currentDigit = num % 10;

            if (currentDigit % 2 != 0) {
                oddSum += currentDigit;
            }else{
                evenSum += currentDigit;
            }

            num = Math.floor(num / 10);
        }

        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
}

solve(1000435);