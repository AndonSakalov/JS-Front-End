function generateReport() {
    let thElements = document.querySelectorAll('table thead th');
    let trElements = document.querySelectorAll('table tbody tr');
    let outputElement = document.getElementById('output');

    let columns = Array
        .from(thElements)
        .map(thElement => {
            let currentCheckBox = thElement.querySelector('input[type=checkbox]');

            return {
                name: thElement.textContent.toLowerCase().trim(),
                active: currentCheckBox.checked
            }
        })

    let final = Array
        .from(trElements)
        .map(trElement => {
            let tdElements = trElement.querySelectorAll('td');

            let result = Array
                .from(tdElements)
                .reduce((data, tdElement, i) => {
                    if (!columns[i].active) {
                        return data;
                    }

                    let columnName = columns[i].name;
                    data[columnName] = tdElement.textContent;

                    return data;
                }, {})

            console.log(result);

            return result;
        });

    outputElement.value = JSON.stringify(final, null, 2);
}


