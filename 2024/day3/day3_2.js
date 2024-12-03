const fs = require('fs');

fs.readFile('2024/day3/day3.txt', 'utf8', (err, input) => {
  const lines = input.split('\n');

  let ops = [...input.matchAll(/(mul\([0-9]+,[0-9]+\))|(do\(\))|(don't\(\))/g)];

  let muls = [];
  let enabledMuls = true;
  ops.filter(op => {
    if (op[0] === 'do()') {
      enabledMuls = true;
    } else if (op[0] === 'don\'t()') {
      enabledMuls = false;
    } else if (enabledMuls) {
      muls.push(op[0]);
    }
  });

  muls = muls.map(mul => [...mul.matchAll(/[0-9]+/g)]);

  console.log(
    muls.reduce((acc, mul) => acc + mul[0] * mul[1], 0)
  );
});


