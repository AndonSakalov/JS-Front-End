function search() {
   let townsElements = document.getElementsByTagName('li');
   for (const town of townsElements) {
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';
   }

   let searchText = document.getElementById('searchText').value;
   let regex = new RegExp(searchText);
   let counter = 0;
   for (const town of townsElements) {
      if (regex.test(town.textContent)) {
         counter++;
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
      }
   }

   let outputFormat = `${counter} matches found`;

   document.getElementById('result').textContent = outputFormat;
}
