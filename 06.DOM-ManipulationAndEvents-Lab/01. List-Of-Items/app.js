function addItem() {
    let newElement = document.createElement('li');
    let text = document.getElementById('newItemText');
    let parentElement = document.getElementById('items');
    newElement.textContent = text.value;
    parentElement.appendChild(newElement);
    text.value = '';
}