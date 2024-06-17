function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    let newElement = document.createElement('option');
    newElement.textContent = text;
    newElement.setAttribute('value', value);

    let parentElement = document.getElementById('menu');
    parentElement.appendChild(newElement);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}