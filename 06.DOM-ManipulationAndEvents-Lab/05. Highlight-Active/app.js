function focused() {
    let divs = document.querySelectorAll('div div');
    for (const div of divs) {
        let input = div.getElementsByTagName('input')[0];
        input.addEventListener('focus', (focus) => {
            div.setAttribute('class', 'focused');
        });

        input.addEventListener('blur', (blur) => {
            div.removeAttribute('class');
        });
    }
    
}