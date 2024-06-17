function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let trElements = document.querySelectorAll('table.container tbody tr');
      let searchedElement = document.getElementById('searchField').value;

      for (const trElement of trElements) {
         let tdElements = trElement.querySelectorAll('td');

         for (const tdElement of tdElements) {
            if (tdElement.textContent.includes(searchedElement)) {
               trElement.className = 'select';
            }
         }
      }

      document.getElementById('searchField').value = '';
   }
}