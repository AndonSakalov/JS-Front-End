function solve() {
    let baseUrl = 'http://localhost:3030/jsonstore/records';
    let loadRecordsButton = document.getElementById('load-records');
    let list = document.getElementById('list');
    let addButton = document.getElementById('add-record');
    let editButton = document.getElementById('edit-record');
    let nameIputF = document.getElementById('p-name');
    let stepsInputF = document.getElementById('steps');
    let caloriesInputF = document.getElementById('calories');

    let btnContainer = document.getElementById('btn-container');



    loadRecordsButton.addEventListener('click', load => {
        fetchElements();
    });

    addButton.addEventListener('click', add => {
        //Probably add check if input fields are empty
        let newName = nameIputF.value;
        let newSteps = stepsInputF.value;
        let newCalories = caloriesInputF.value;


        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                steps: newSteps,
                calories: newCalories,
            })
        })
            .then(res => {
                if (!res.ok) {
                    return;
                }
                nameIputF.value = '';
                stepsInputF.value = '';
                caloriesInputF.value = '';

                fetchElements();
            })
            .catch(err => console.log(err));
    });

    editButton.addEventListener('click', edit => {
        let newEditName = nameIputF.value;
        let newEditSteps = stepsInputF.value;
        let newEditCalories = caloriesInputF.value;
        let currentId = editButton.nextElementSibling.textContent;
        fetch(`${baseUrl}/${currentId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: newEditName,
                steps: newEditSteps,
                calories: newEditCalories,
                _id : currentId,
            })
        })
            .then(res => {
                if (!res.ok) {
                    return;
                }
                nameIputF.value = '';
                stepsInputF.value = '';
                caloriesInputF.value = '';
                let hiddenIdToRemove = document.getElementById('hiddenId');
                btnContainer.removeChild(hiddenIdToRemove);
            })
            .catch(er => console.log(er));

            editButton.disabled = true;
            addButton.disabled = false;

            fetchElements();
    });


    function createElements(data) {
        for (const key in data) {
            let name = data[key].name;
            let steps = data[key].steps;
            let calories = data[key].calories;
            let id = key;

            let liElement = document.createElement('li');
            liElement.classList.add('record');

            let infoDiv = document.createElement('div');
            infoDiv.classList.add('info');
            let pName = document.createElement('p');
            let pSteps = document.createElement('p');
            let pCalories = document.createElement('p');
            pName.textContent = name;
            pSteps.textContent = steps;
            pCalories.textContent = calories;
            infoDiv.appendChild(pName);
            infoDiv.appendChild(pSteps);
            infoDiv.appendChild(pCalories);

            let buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('btn-wrapper');
            let changeButton = document.createElement('button');
            changeButton.classList.add('change-btn');
            changeButton.textContent = 'Change';
            let deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Delete';
            buttonsDiv.appendChild(changeButton);
            buttonsDiv.appendChild(deleteButton);

            liElement.appendChild(infoDiv);
            liElement.appendChild(buttonsDiv);

            list.appendChild(liElement);

            changeButton.addEventListener('click', change => {
                nameIputF.value = name;
                stepsInputF.value = steps;
                caloriesInputF.value = calories;

                editButton.disabled = false;
                addButton.disabled = true;

                list.removeChild(liElement);

                let hiddenIdP = document.createElement('p');
                hiddenIdP.id = 'hiddenId';
                hiddenIdP.hidden = true;
                btnContainer.appendChild(hiddenIdP);
                hiddenIdP.textContent = id;
            });

            deleteButton.addEventListener('click', del =>{
                fetch(`${baseUrl}/${id}`,{
                    method: 'DELETE',
                    
                })
                .then(res => {
                    if (!res.ok) {
                        
                    }
                    fetchElements();
                })
                .catch(er => console.log(er));
            });
        }
    }

    function fetchElements() {
        list.innerHTML = '';
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                createElements(data);
            })
            .catch(er => console.log(er));
    }
}

solve();