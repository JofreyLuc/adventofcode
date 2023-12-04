const fs = require('fs');


fs.readFile('day4/day4.txt', 'utf8', (err, data) => {
  const lines = data.split('\n');
  console.log(lines.map((line) => {
    const card = line.split(':');
    const game = card[1].split('|');
    const winningNumbers = game[0].trim().replaceAll(/\s+/g, ' ').split(' ');
    const pickedNumbers = game[1].trim().replaceAll(/\s+/g, ' ').split(' ');
    const winningPicks = pickedNumbers.filter(number => winningNumbers.includes(number)).length;
    if (!winningPicks) {
      return 0;
    }
    return Math.pow(2, winningPicks - 1);
    }).reduce((sum, elem) => sum + elem, 0)
  );
});
