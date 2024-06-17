function solve(a, b, c) {
    getMinNum(a, b, c);

    function getMinNum(...numsArr) {
        let minNum = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < numsArr.length; i++) {
            if (numsArr[i] < minNum) {
                minNum = numsArr[i];
            }
        }

        console.log(minNum);
    }
}