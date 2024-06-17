function extract(content) {
    let text = document.getElementById(content).textContent;

    let regex = /\(([^)]+)\)/g;
    let found = text.match(regex);

    let stringOutput = '';
    for (let i = 0; i < found.length; i++) {
        stringOutput = found.join('; ');
    }

    return stringOutput;
}