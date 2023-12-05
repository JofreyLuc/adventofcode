const fs = require('fs');

applyRuleToData = (rule, value) => {
  const ruleParams = rule.split(' ').map(Number);
  if (value < ruleParams[1] || value > ruleParams[1] + ruleParams[2]) {
    return value;
  }

  return ruleParams[0] + (value - ruleParams[1]);
}

fs.readFile('day5/day5.txt', 'utf8', (err, data) => {
  const steps = data
    .replaceAll(/.*:/g, '*')
    .replaceAll('*\n', '*')

    .split('*');
  console.log(steps);
  let values = steps.shift().trim().split(' ').map(Number);

  steps.forEach(step => {
    const rules = step.split('\n');
    values = values.map(seed => rules.reduce((newSeed, currentRule) => applyRuleToData(currentRule, newSeed), seed));
  });

  console.log(values.reduce((min, value) => Math.min(min, value), Number.MAX_VALUE));
});
