function solve() {

  function transformText(textConvention, text) {
    if (textConvention === 'Camel Case') {
      textArr = text.split(' ');

      for (let i = 0; i < textArr.length; i++) {
        if (i === 0) {
          textArr[i] = textArr[i].toLowerCase();
        } else {
          let str = textArr[i].toLowerCase();
          let result = str.charAt(0).toUpperCase() + str.slice(1);
          textArr[i] = result;
        }
      }

    } else if (textConvention === 'Pascal Case') {
      textArr = text.split(' ');

      for (let i = 0; i < textArr.length; i++) {
        let str = textArr[i].toLowerCase();
        let result = str.charAt(0).toUpperCase() + str.slice(1);
        textArr[i] = result;
      }
    }

    return textArr.join('');
  }

  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = '';
  switch (namingConvention) {
    case 'Camel Case':
      result = transformText(namingConvention, text);
      break;
    case 'Pascal Case':
      result = transformText(namingConvention, text);
      break;

    default:
      result = ('Error!');
      break;
  }

  document.getElementById('result').textContent = result;
}