const fs = require('fs');

const txtToNumber = (txt) => {
  switch(txt) {
    case 'zero': return '0';
    case 'one': return '1';
    case 'two': return '2';
    case 'three': return '3';
    case 'four': return '4';
    case 'five': return '5';
    case 'six': return '6';
    case 'seven': return '7';
    case 'eight': return '8';
    case 'nine': return '9';
    default: return txt;
  }
}

fs.readFile('ex1.txt', 'utf8', (err, data) => {
  const lines = data.split('\n');
  console.log(lines.map(line => {
      let digits = line.matchAll(/(?=([0-9]|zero|one|two|three|four|five|six|seven|eight|nine))/g);
      digits = Array.from(digits);
      return Number(txtToNumber(digits[0][1]) + '' + txtToNumber(digits.pop()[1]));
    }).reduce((sum, elem) => sum + elem, 0)
  );
})