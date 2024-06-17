function create(words) {
   let divElements = words
      .map(word => {
         let divElement = document.createElement('div');
         let pElement = document.createElement('p');

         pElement.textContent = word;
         pElement.style.display = 'none';
         divElement.appendChild(pElement);

         return divElement;
      });

   let contentElement = document.getElementById('content');
   
   divElements.forEach(divElement => {
      
      divElement.addEventListener('click', () => {
         pElement = divElement.querySelector('p');
         pElement.style.display = 'block';
      })

      contentElement.appendChild(divElement);
   });

}