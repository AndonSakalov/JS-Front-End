function solution() {
    let baseURL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let contentURL = 'http://localhost:3030/jsonstore/advanced/articles/details';

    let mainSection = document.getElementsByTagName('section')[0];

    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            createArticleDivs(data);
        })
        .catch(ex => console.log('error at loadingTitles'));


    function createArticleDivs(data) {
        for (const piece of data) {

            let outerDiv = document.createElement('div');
            outerDiv.classList.add('accordion');

            let divHead = document.createElement('div');
            divHead.classList.add('head');

            let spanElement = document.createElement('span');
            spanElement.textContent = piece.title;
            let button = document.createElement('button');
            button.classList.add('button');
            button.id = piece._id;
            button.textContent = 'More';

            button.addEventListener('click', show => {

                if (show.currentTarget.textContent === 'More') {
                    show.currentTarget.textContent = 'Less';
                    extraDiv.style.display = 'block';
                } else {
                    show.currentTarget.textContent = 'More';
                    extraDiv.style.display = 'none';
                }
            });


            divHead.appendChild(spanElement);
            divHead.appendChild(button);


            let extraDiv = document.createElement('div');
            extraDiv.classList.add('extra');
            let pElement = document.createElement('p');
            let hiddenText = fetchTextContent(button.id, pElement);
            pElement.textContent = hiddenText;
            extraDiv.appendChild(pElement);

            outerDiv.appendChild(divHead);
            outerDiv.appendChild(extraDiv);
            mainSection.appendChild(outerDiv)


        }
    }

    function fetchTextContent(id, pElement) {
        fetch(`${contentURL}/${id}`)
            .then(res => res.json())
            .then(chosenElementInfo => {
                pElement.textContent = chosenElementInfo.content;

            })
            .catch(ex => console.log('problem'));
    }
}

solution();