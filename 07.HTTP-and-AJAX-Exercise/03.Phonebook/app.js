function attachEvents() {
    let baseGetAndPostUrl = 'http://localhost:3030/jsonstore/phonebook';
    let loadButton = document.getElementById('btnLoad');
    let createButton = document.getElementById('btnCreate');
    let personInputElement = document.getElementById('person');
    let phoneInputElement = document.getElementById('phone');
    let phoneBookElement = document.getElementById('phonebook');

    loadButton.addEventListener('click', load => {
        phoneBookElement.innerHTML = '';
        fetch(baseGetAndPostUrl)
            .then(res => res.json())
            .then(contacts => {
                for (const key in contacts) {
                    phoneBookElement.appendChild(createContanct(contacts[key]));
                }
            });
    });

    createButton.addEventListener('click', create => {
        let person = personInputElement.value;
        let phone = phoneInputElement.value;
        fetch(baseGetAndPostUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person,
                phone,
            })
        })
            .then(res => res.json())
            .then(entry => {
                phoneBookElement.appendChild(createContanct(entry));
            });
    });

    function createContanct({ _id, person, phone }) {
        console.log(person);
        console.log(phone);
        let li = document.createElement('li');
        li.textContent = `${person}: ${phone}`;
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);

        deleteButton.addEventListener('click', del => {
            fetch(`${baseGetAndPostUrl}/${_id}`, {
                method: 'DELETE'
            })
                .then(() => {
                    li.remove();
                })
        });

        return li;
    };
}

attachEvents();