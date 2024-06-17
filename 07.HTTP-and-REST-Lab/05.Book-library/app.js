function attachEvents() {
  let inputFields = document.querySelectorAll('#form input');
  let submitButton = document.querySelector('div[id=form] button');

  let titleInputField = inputFields[0];
  let authorInputField = inputFields[1];
  let parentElement = document.getElementsByTagName('tbody')[0];

  submitButton.addEventListener('click', addContent => {
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    let thirdTdElement = document.createElement('td');
    thirdTdElement.appendChild(editButton);
    thirdTdElement.appendChild(deleteButton);

    let firstTdElement = document.createElement('td');
    firstTdElement.textContent = titleInputField.value;

    let secondTdElement = document.createElement('td');
    secondTdElement.textContent = authorInputField.value;

    let trElement = document.createElement('tr');

    parentElement.appendChild(firstTdElement);
    parentElement.appendChild(secondTdElement);
    parentElement.appendChild(thirdTdElement);

    parentElement.appendChild(trElement);
  });
}

attachEvents();
