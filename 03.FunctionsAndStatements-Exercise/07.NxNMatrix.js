function solve(num){

    function printRow(num){
        let str = String(num) + ' ';
        let currentRow = str.repeat(num).trim();
        console.log(currentRow)
    }

    for (let i = 0; i < num; i++) {
        printRow(num);
    }
}

solve(3);