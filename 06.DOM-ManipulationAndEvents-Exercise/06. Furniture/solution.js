function solve() {

  let textAreas = document.getElementsByTagName('textarea');
  let buttons = document.getElementsByTagName('button');
  let inputArea = textAreas[0];
  let outputArea = textAreas[1];
  let inputButton = buttons[0];
  let outputButton = buttons[1];
  let tbodyElement = document.querySelector('tbody');

  inputButton.addEventListener('click', (extract) => {
    let furnitures = JSON.parse(inputArea.value);
    for (const furniture of furnitures) {
      let imgElement = document.createElement('img');
      imgElement.src = furniture.img;
      let imageTdElement = document.createElement('td');
      imageTdElement.appendChild(imgElement);

      let pElement = document.createElement('p');
      pElement.textContent = furniture.name;
      let pTdElement = document.createElement('td');
      pTdElement.appendChild(pElement);

      let priceElement = document.createElement('p');
      priceElement.textContent = furniture.price;
      let priceTdElement = document.createElement('td');
      priceTdElement.appendChild(priceElement);

      let decFactorElement = document.createElement('p');
      decFactorElement.textContent = furniture.decFactor;
      let decFactorTdElement = document.createElement('td');
      decFactorTdElement.appendChild(decFactorElement);

      let checkBoxItem = document.createElement('input');
      checkBoxItem.setAttribute('type', 'checkbox');
      let checkBoxTdElement = document.createElement('td');
      checkBoxTdElement.appendChild(checkBoxItem);

      let trElement = document.createElement('tr');
      trElement.appendChild(imageTdElement);
      trElement.appendChild(pTdElement);
      trElement.appendChild(priceTdElement);
      trElement.appendChild(decFactorTdElement);
      trElement.appendChild(checkBoxTdElement);

      tbodyElement.appendChild(trElement);
    }
  });

  outputButton.addEventListener('click', (output) => {
    let names = [];
    let totalPrice = 0;
    let averageDecFactor = 0;
    Array.from(tbodyElement.children)
      .forEach(f => {
        let check = f.querySelector('input');
        if (!check.checked) {
          return;
        }

        let name = f.children.item(1).textContent;
        let price = Number(f.children.item(2).textContent);
        let decFactor = Number(f.children.item(3).textContent);


        names.push(name);
        totalPrice += price;
        averageDecFactor += decFactor;

        console.log(name);
        console.log(price);
        console.log(decFactor);

      });

    averageDecFactor /= names.length;

    outputArea.textContent += `Bought furniture: ${names.join(', ')}\n`;
    outputArea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputArea.textContent += `Average decoration factor: ${averageDecFactor}`;
  });
}