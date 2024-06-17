function app() {
    let gamesList = document.getElementById('games-list');
    let loadButton = document.getElementById('load-games');
    let addGameButton = document.getElementById('add-game');
    let editGameButton = document.getElementById('edit-game');

    let newGameNameElement = document.getElementById('g-name');
    let newGameTypeElement = document.getElementById('type');
    let newGamePlayersElement = document.getElementById('players');

    let formEl = document.querySelector('form');

    let baseUrl = 'http://localhost:3030/jsonstore/games';

    loadButton.addEventListener('click', load => {
        fetchData();
    });

    editGameButton.addEventListener('click', edit => {
        let formElId = formEl.id;
        console.log(formElId);
        fetch(`${baseUrl}/${formElId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: newGameNameElement.value,
                type: newGameTypeElement.value,
                players: newGamePlayersElement.value,
                _id: formElId,
            }),
        })
            .then(res => res.json())
            .then(result => {
                fetchData();
                editGameButton.disabled = true;
                addGameButton.disabled = false;
                newGameNameElement.value = '';
                newGameTypeElement.value = '';
                newGamePlayersElement.value = '';
                formEl.id = '';
            })
            .catch(err => console.log(err))
    });

    addGameButton.addEventListener('click', async add => {
        if (newGameNameElement.value !== '' && newGameTypeElement.value !== '' && newGamePlayersElement.value !== '') {
            let newGameName = newGameNameElement.value;
            let newGameType = newGameTypeElement.value;
            let newGamePlayers = newGamePlayersElement.value;

            fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: newGameName,
                    type: newGameType,
                    players: newGamePlayers,
                })
            })
                .then(res => res.json())
                .then(() => {
                    newGameNameElement.value = '';
                    newGameTypeElement.value = '';
                    newGamePlayersElement.value = '';
                    fetchData();
                })
                .catch(er => console.log('error'));
        }
    });


    function fetchData() {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                gamesList.innerHTML = '';
                loadGames(data);
            })
            .catch(() => console.log('error'));
    }

    function loadGames(data) {
        for (const key in data) {
            let currentGameDiv = document.createElement('div');
            currentGameDiv.classList.add('board-game');
            currentGameDiv.id = key;

            let innerDiv = document.createElement('div');
            innerDiv.classList.add('content');

            let nameP = document.createElement('p');
            let playersP = document.createElement('p');
            let typeP = document.createElement('p');

            nameP.textContent = data[key].name;
            playersP.textContent = data[key].players;
            typeP.textContent = data[key].type;

            innerDiv.appendChild(nameP);
            innerDiv.appendChild(typeP);
            innerDiv.appendChild(playersP);

            let buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('buttons-container');

            let changeButton = document.createElement('button');
            changeButton.classList.add('change-btn');
            changeButton.textContent = 'Change';
            let deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', del => {
                let currentGameId = del.target.parentElement.parentElement.id;
                fetch(`${baseUrl}/${currentGameId}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(resData => {
                        fetchData();
                    })
                    .catch(er => console.log('error'));
            });

            changeButton.addEventListener('click', change => {
                let parentElement = change.currentTarget.parentElement.parentElement;

                formEl.id = parentElement.id;

                currentGameInfo = data[parentElement.id];
                newGameNameElement.value = currentGameInfo.name;
                newGameTypeElement.value = currentGameInfo.type;
                newGamePlayersElement.value = currentGameInfo.players;

                editGameButton.disabled = false;
                addGameButton.disabled = true;
            });

            buttonsDiv.appendChild(changeButton);
            buttonsDiv.appendChild(deleteButton);

            currentGameDiv.appendChild(innerDiv);
            currentGameDiv.appendChild(buttonsDiv);

            gamesList.appendChild(currentGameDiv);
        }

        
    }
}

app();