function addItem() {
    let newElement = document.createElement('li');
    let text = document.getElementById('newItemText');
    let parentElement = document.getElementById('items');

    newElement.textContent = text.value;
    parentElement.appendChild(newElement);
    text.value = '';

    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.setAttribute('href', "#");
    newElement.appendChild(deleteLink);

    function removeElement() {
        parentElement.removeChild(newElement);
    }
    
    deleteLink.addEventListener('click', removeElement);
}