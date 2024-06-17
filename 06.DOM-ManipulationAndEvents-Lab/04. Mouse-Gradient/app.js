function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        let currentWidth = event.offsetX;
        let elementWidth = event.target.clientWidth;
        let progress = Math.floor((currentWidth / elementWidth) * 100);
        console.log(progress);
        resultElement.textContent = `${progress}%`;
    });
}