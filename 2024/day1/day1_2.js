const fs = require('fs');

fs.readFile('2024/day1/day1.txt', 'utf8', (err, input) => {
  const lines = input.split('\n');
  const locsA = [];
  const locsB = [];
  lines.forEach(line => {
    const [locA, locB] = line.split('   ').map(Number);
    locsA.push(locA);
    locsB.push(locB);
  });

  const result = locsA.map(locA => {
    return locsB.filter(locB => locB === locA).length * locA;
  }).reduce((acc, elem) => acc + elem, 0);

  console.log(result);
});


