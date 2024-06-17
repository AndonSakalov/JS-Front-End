function solve() {
    let baseURL = 'http://localhost:3030/jsonstore/gifts';
    let presentsWrapperEl = document.getElementById('gift-list');
    let loadGiftsButton = document.getElementById('load-presents');
    let addPresentButton = document.getElementById('add-present');
    let editPresentButton = document.getElementById('edit-present');
    let presentInputField = document.getElementById('gift');
    let forInputField = document.getElementById('for');
    let priceInputField = document.getElementById('price');

    loadGiftsButton.addEventListener('click', load => {
        fetchPresentsFromDataBase();
    });

    editPresentButton.addEventListener('click', edit => {
        fetch(`${baseURL}/${editPresentButton.className}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                gift: presentInputField.value,
                for: forInputField.value,
                price: priceInputField.value,
            })

        })
            .then(res => {
                if (!res.ok) {
                    return;
                }

                editPresentButton.classList.remove(editPresentButton.className);
                presentInputField.value = '';
                forInputField.value = '';
                priceInputField.value = '';
                editPresentButton.disabled = true;
                addPresentButton.disabled = false;

                fetchPresentsFromDataBase();

            })
            .catch(er => console.log('error!'));
    });

    addPresentButton.addEventListener('click', add => {
        if (presentInputField.value !== '' && forInputField.value !== '' && priceInputField.value !== '') {
            let presentToAdd = presentInputField.value;
            let presentFor = forInputField.value;
            let presentPrice = priceInputField.value;
            fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    gift: presentToAdd,
                    for: presentFor,
                    price: presentPrice,
                })
            })
                .then(res => {
                    if (!res.ok) {
                        return;
                    }

                    fetchPresentsFromDataBase();
                    presentInputField.value = '';
                    forInputField.value = '';
                    priceInputField.value = '';
                })
                .catch(er => console.log('error'));
        }
    });

    function loadSinglePresentSock(id, sock) {
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('gift-sock');
        outerDiv.id = id;

        let div1 = document.createElement('div');
        div1.classList.add('content');
        let pElement1 = document.createElement('p');
        let pElement2 = document.createElement('p');
        let pElement3 = document.createElement('p');
        pElement1.textContent = sock.gift;
        pElement2.textContent = sock.for;
        pElement3.textContent = sock.price;

        let div2 = document.createElement('div');
        div2.classList.add('buttons-container');

        let changeButton = document.createElement('button');
        changeButton.classList.add('change-btn');
        changeButton.textContent = 'Change';

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';


        div1.appendChild(pElement1);
        div1.appendChild(pElement2);
        div1.appendChild(pElement3);

        div2.appendChild(changeButton);
        div2.appendChild(deleteButton);

        outerDiv.appendChild(div1);
        outerDiv.appendChild(div2);

        presentsWrapperEl.appendChild(outerDiv);

        changeButton.addEventListener('click', change => {
            let sockEl = change.currentTarget.parentElement.parentElement;
            presentInputField.value = pElement1.textContent;
            forInputField.value = pElement2.textContent;
            priceInputField.value = pElement3.textContent;
            presentsWrapperEl.removeChild(sockEl);
            addPresentButton.disabled = true;
            editPresentButton.disabled = false;
            editPresentButton.classList.add(sockEl.id);
        });

        deleteButton.addEventListener('click', del => {
            let sockEle = del.currentTarget.parentElement.parentElement;
            let deleteElId = sockEle.id;

            fetch(`${baseURL}/${deleteElId}`, {
                method: 'DELETE',
            })
                .then(res => {
                    if (!res.ok) {
                        return;
                    }
                    sockEle.remove();
                    fetchPresentsFromDataBase();
                    presentInputField.value = '';
                    forInputField.value = '';
                    priceInputField.value = '';
                })
                .catch(err => console.log('Error with delete request!'));


        });

    };

    function fetchPresentsFromDataBase() {
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                presentsWrapperEl.innerHTML = '';
                for (const key in data) {
                    loadSinglePresentSock(key, data[key]);
                }
            })
            .catch(er => console.log('firstErr'));
    }
}

solve();
//TODO:
//Possible reason for timeout errors - setting the id of the sock
//FIX: make unvisible html element that holds the id instead of the sock