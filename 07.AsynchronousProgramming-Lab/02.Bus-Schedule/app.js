function solve() {
    async function depart() {
        let generalUrl = 'http://localhost:3030/jsonstore/bus/schedule';
        let departButton = document.getElementById('depart');
        let arriveButton = document.getElementById('arrive');
        let id = '';
        let outputElement = document.querySelector('div[id=info] span');
        if (outputElement.textContent === 'Not Connected') {
            id = 'depot';
            try {
                const response = await fetch(`${generalUrl}/${id}`);
                const data = await response.json();
                outputElement.textContent = `Next stop ${data.name}`;
            } catch (error) {
                console.error('Error:', error);
                outputElement.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
                return;
            }
        } else {
            const outPutSplit = outputElement.textContent.split(' ');
            const currentStop = outPutSplit.slice(2).join(' ').toLowerCase().trimEnd();
            try {
                const response = await fetch(`${generalUrl}/${currentStop}`);
                const data = await response.json();
                id = data.next;
                const nextResponse = await fetch(`${generalUrl}/${id}`);
                const nextData = await nextResponse.json();
                outputElement.textContent = `Next stop ${nextData.name}`;
            } catch (error) {
                console.error('Error:', error);
                outputElement.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
                return;
            }
        }

        departButton.disabled = true;
        arriveButton.disabled = false;
    }

    async function arrive() {
        let outputElement = document.querySelector('div[id=info] span');
        let departButton = document.getElementById('depart');
        let arriveButton = document.getElementById('arrive');

        let splited = outputElement.textContent.split(' ');
        splited[0] = 'Arriving';
        splited[1] = 'at';
        outputElement.textContent = splited.join(' ').trimEnd();

        arriveButton.disabled = true;
        departButton.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
