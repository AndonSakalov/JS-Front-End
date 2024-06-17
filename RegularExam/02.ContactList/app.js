function solve() {
  let nameInputField = document.getElementById('name');
  let phoneInputField = document.getElementById('phone');
  let categoryInputField = document.getElementById('category');
  let addButton = document.getElementById('add-btn');
  let checkList = document.getElementById('check-list');
  




  addButton.addEventListener('click', add => {
    let chosenOption = categoryInputField.options[categoryInputField.selectedIndex].text;

    if (nameInputField.value !== '' && phoneInputField.value !== '' && chosenOption !== '' && chosenOption !== 'Category') {

      let contactList = document.getElementById('contact-list');
      let currentContactLi = document.createElement('li');
      let currentContactArticle = document.createElement('article');
      let currentContactPName = document.createElement('p');
      let currentContactPPhone = document.createElement('p');
      let currentContactPcategory = document.createElement('p');
      let editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      let saveButton = document.createElement('button');
      saveButton.classList.add('save-btn');
      let divElement = document.createElement('div');
      divElement.classList.add('buttons');
      divElement.appendChild(editButton);
      divElement.appendChild(saveButton);


      currentContactPName.textContent = `name:${nameInputField.value}`;
      currentContactPPhone.textContent = `phone:${phoneInputField.value}`;
      currentContactPcategory.textContent = `category:${chosenOption}`;

      currentContactArticle.appendChild(currentContactPName);
      currentContactArticle.appendChild(currentContactPPhone);
      currentContactArticle.appendChild(currentContactPcategory);

      currentContactLi.appendChild(currentContactArticle);
      currentContactLi.appendChild(divElement);
      checkList.appendChild(currentContactLi);
      nameInputField.value = '';
      phoneInputField.value = '';

      editButton.addEventListener('click', edit => {
        nameInputField.value = currentContactPName.textContent.substring(4);
        phoneInputField.value = currentContactPPhone.textContent.substring(6);

        currentContactLi.innerHTML = '';
      });

      saveButton.addEventListener('click', save => {
        contactList.appendChild(currentContactLi);
        divElement.innerHTML = '';
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('del-btn');
        divElement.appendChild(deleteButton);

        deleteButton.addEventListener('click', del => {
          contactList.removeChild(currentContactLi);
        });
      });
    }
  })

}

solve();