function attachEventsListeners() {

    let divs = document.getElementsByTagName('div');

    for (const div of divs) {
        let currentButton = div.getElementsByTagName('input')[1];

        currentButton.addEventListener('click', (convert) => {
            let currentValue = div.getElementsByTagName('input')[0].value;

            let convertFrom = div.getElementsByTagName('label')[0].textContent.trimEnd();
            let toDays;
            let toHours;
            let toMinutes;
            let toSeconds;
            switch (convertFrom) {
                case 'Days:':
                    toHours = (divs[1].getElementsByTagName('input')[0].value = currentValue * 24);

                    toMinutes = (divs[2].getElementsByTagName('input')[0].value = currentValue * 24 * 60);

                    toSeconds = (divs[3].getElementsByTagName('input')[0].value = currentValue * 24 * 60 * 60);
                    break;

                case 'Hours:':
                    toDays = (divs[0].getElementsByTagName('input')[0].value = currentValue / 24);

                    toMinutes = (divs[2].getElementsByTagName('input')[0].value = currentValue * 60);

                    toSeconds = (divs[3].getElementsByTagName('input')[0].value = currentValue * 60 * 60);
                    break;

                case 'Minutes:':
                    toDays = (divs[0].getElementsByTagName('input')[0].value = currentValue / 60 / 24);

                    toHours = (divs[1].getElementsByTagName('input')[0].value = currentValue / 60);

                    toSeconds = (divs[3].getElementsByTagName('input')[0].value = currentValue * 60);
                    break;

                case 'Seconds:':
                    toDays = (divs[0].getElementsByTagName('input')[0].value = currentValue / 60 / 60 / 24);

                    toMinutes = (divs[1].getElementsByTagName('input')[0].value = currentValue / 60);

                    toHours = (divs[2].getElementsByTagName('input')[0].value = currentValue / 60 / 60);
                    break;
                default:
                    break;
            }
        });
    }
}