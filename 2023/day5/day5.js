const fs = require('fs');

applyRulesToData = (rules, value) => {
  //console.log(rule, value);

  const parsedRules = rules.map(rule => rule.split(' ').map(Number));
  //console.log(parsedRules);

  const goodRule = parsedRules.find(rule => {
    return !(value < rule[1] || value >= rule[1] + rule[2]);
  })

  if (goodRule) {
    return goodRule[0] + (value - goodRule[1]);
  }

  return value;
}

fs.readFile('day5/day5.txt', 'utf8', (err, data) => {
  const steps = data
    .replaceAll(/.*:/g, '*')
    .replaceAll('*\n', '*')
    .replaceAll(/\n\s*\n/g, '\n')
    .split('*');
  steps.shift();

  //steps.forEach(console.log);

  let values = steps.shift().trim().split(' ').map(Number);

  console.log('value pairs : ' + values.length / 2);

  const mins = [];
  for (let i = 0; i < values.length; i += 2) {
    console.log('pair ' + i/2);
    const num = values[i];
    const range = values[i + 1];
    console.log('num : ' + num);
    console.log('range : ' + range)
    let min = Number.MAX_VALUE;
    for (let currentValue = num; currentValue < num + range; currentValue++) {
      steps.forEach(step => {
        const rules = step.split('\n');
        rules.pop();
        //console.log(values);
        min = Math.min(min, applyRulesToData(rules, currentValue));
      });
    }

    /*steps.forEach(step => {
      const rules = step.split('\n');
      rules.pop();
      //console.log(values);
      currentValues = currentValues.map(seed => applyRulesToData(rules, seed));
    });*/

    mins.push(min);
  }




  console.log(mins.reduce((min, value) => Math.min(min, value), Number.MAX_VALUE));
});
