function solve(numbers) {

    for (const number of numbers) {
        console.log(isPalindrome(number));
    }
   
    function isPalindrome(num) {
        numArr = num
            .toString()
            .split('');

        let firstHalf = '';
        for (let i = 0; i < Math.floor(numArr.length / 2); i++) {
            firstHalf += numArr[i];
        }

        let secondHalf = '';
        for (let i = numArr.length - 1; i >= Math.ceil(numArr.length / 2); i--) {
            secondHalf += numArr[i];
        }

        return firstHalf === secondHalf;
    }
}

solve([123,323,421,121]);