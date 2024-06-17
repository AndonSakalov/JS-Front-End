function solve() {
  let text = document.getElementById('input').value;
  let sentances = text.split('.').filter(el => el !== '');
  let outputBox = document.getElementById('output');
  let counter = 0;
  let threeSentances = [];
  while (sentances.length > 0) {
    if (counter === 3) {
      outputBox.innerHTML += `<p>${threeSentances.join('.')}</p>`;
      threeSentances = [];
      counter = 0;
    } else {
      threeSentances.push(sentances.shift());
      counter++;
    }
  }

  if (threeSentances.length > 0) { 
    outputBox.innerHTML += `<p>${threeSentances.join('.') + '.'}</p>`;
  }
}