window.addEventListener("load", solve());

function solve() {
  let animalTypeInput = document.getElementById('type');
  let animalAgeInput = document.getElementById('age');
  let animalGenderInput = document.getElementById('gender');
  let adoptButton = document.getElementById('adopt-btn');
  let adoptionInfo = document.getElementById('adoption-info');
  let doneList = document.getElementById('adopted-list');

  adoptButton.addEventListener('click', adopt => {
    let chosenOption = animalGenderInput.options[animalGenderInput.selectedIndex];
    if (animalTypeInput.value !== '' && animalAgeInput.value !== '' && chosenOption.text !== 'Gender') {
      createDomElement(animalTypeInput.value, animalAgeInput.value, chosenOption);

      animalTypeInput.value = '';
      animalAgeInput.value = '';
      animalGenderInput.selectedIndex = 0;

    }
  });

  function createDomElement(animalType, animalAge, animalGender) {
    let liElement = document.createElement('li');

    let articleElement = document.createElement('article');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.textContent = `Pet:${animalType}`;
    p2.textContent = `Gender:${animalGender.text.toLowerCase()}`;
    p3.textContent = `Age:${animalAge}`;
    articleElement.appendChild(p1);
    articleElement.appendChild(p2);
    articleElement.appendChild(p3);


    let divElement = document.createElement('div');
    divElement.classList.add('buttons');

    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';

    let doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.textContent = 'Done';

    divElement.appendChild(editButton);
    divElement.appendChild(doneButton);

    liElement.appendChild(articleElement);
    liElement.appendChild(divElement);


    adoptionInfo.appendChild(liElement);

    editButton.addEventListener('click', edit => {
      edit.preventDefault();
      animalTypeInput.value = animalType;
      animalAgeInput.value = animalAge;
      animalGenderInput.value = animalGender;
      adoptionInfo.removeChild(liElement);
    });

    doneButton.addEventListener('click', done => {
      done.preventDefault();
      liElement.removeChild(divElement);
      let clearButton = document.createElement('button');
      clearButton.classList.add('clear-btn');
      clearButton.textContent = 'Clear';
      liElement.appendChild(clearButton);

      doneList.appendChild(liElement);

      clearButton.addEventListener('click', remove =>{
        doneList.removeChild(liElement);
      });
    });
  }
}
