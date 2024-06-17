function sumTable() {
    let productPriceArr = document.getElementsByTagName('td');
    let sum = 0;
    for (let i = 0; i < productPriceArr.length - 1; i++) {
        if (i % 2 !== 0) {
            sum += Number(productPriceArr[i].textContent);
        }
    }

    document.getElementById('sum').textContent = sum;
}