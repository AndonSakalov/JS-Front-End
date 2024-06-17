function extractText() {
    let collection = document.getElementsByTagName('li');
    for (const listItem of collection) {
        let text = listItem.textContent;
        document.getElementById('result').value += text + '\n';
    }

}