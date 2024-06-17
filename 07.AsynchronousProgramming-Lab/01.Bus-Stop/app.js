function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    let inputElement = document.getElementById('stopId');
    let stopNameElement = document.getElementById('stopName');
    let busesElement = document.getElementById('buses');
    let stopId = inputElement.value;

    fetch(`${baseUrl}/${stopId}`)
    .then(res => res.json())
    .then(data =>{
        stopNameElement.textContent = data.name
        let busesDict = data.buses;
        for (const key in busesDict) {
            let currentBusLi = document.createElement('li');
            currentBusLi.textContent = `Bus ${key} arrives in ${busesDict[key]} minutes`;
            busesElement.appendChild(currentBusLi);
        }
    })
    .catch(er => 
        stopNameElement.textContent = 'Error');

}