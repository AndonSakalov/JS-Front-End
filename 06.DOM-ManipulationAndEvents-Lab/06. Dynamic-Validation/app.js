function validate() {
    let emailInputElement = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+/;
    emailInputElement.addEventListener('change', validation => {
        if (!pattern.test(validation.target.value)) {
            validation.target.classList.add('error');
        } else {
            validation.target.classList.remove('error');
        }
    });
}