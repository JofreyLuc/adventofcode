const fs = require('fs');

fs.readFile('2024/day3/day3.txt', 'utf8', (err, input) => {
  const lines = input.split('\n');

  let muls = [...input.matchAll(/mul\([0-9]+,[0-9]+\)/g)];
  muls = muls.map(mul => [...mul[0].matchAll(/[0-9]+/g)]);

  console.log(muls.map(mul => mul[0]));

  console.log(
    muls.reduce((acc, mul) => acc + mul[0] * mul[1], 0)
  );
});


