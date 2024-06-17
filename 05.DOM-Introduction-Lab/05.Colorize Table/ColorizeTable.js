function colorize() {
    let towns = document.getElementsByTagName('tr');

    let counter = 0;
    for (const town of towns) {
        if (counter % 2 !== 0 && counter !== 0) {
            town.style.backgroundColor = 'Teal';
        }
        counter++;
    }
}