function lockedProfile() {
    let profiles = Array.from(document.getElementsByClassName('profile'));
    for (const profile of profiles) {
        let lock = profile.getElementsByTagName('input')[0];
        let button = profile.querySelector('button');
        let hiddenDiv = profile.querySelector('div');
        button.addEventListener('click', (showMore) => {
            if (lock.checked === true) {
                return;
            }
            
            if (button.textContent === 'Show more') {
                hiddenDiv.style.display = 'block';
                button.textContent = 'Hide it'
            } else {
                hiddenDiv.style.display = 'none';
                button.textContent = 'Show more'
            }
        });
    }
}