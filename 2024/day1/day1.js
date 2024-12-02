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

  locsA.sort();
  locsB.sort();

  console.log(locsA.reduce((acc, locA, i) => {
    const locB = locsB[i];
    return acc + Math.abs(locA - locB);
  }, 0));
});


