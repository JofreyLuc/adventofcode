const fs = require('fs');


fs.readFile('day4/day4.txt', 'utf8', (err, data) => {
  const lines = data.split('\n');
  const cardsCounter = new Map(lines.map((line, index) => [index, 1]));
  lines.forEach((line, lineIndex) => {
    const card = line.split(':');
    const game = card[1].split('|');
    const winningNumbers = game[0].trim().replaceAll(/\s+/g, ' ').split(' ');
    const pickedNumbers = game[1].trim().replaceAll(/\s+/g, ' ').split(' ');
    const winningPicks = pickedNumbers.filter(number => winningNumbers.includes(number)).length;

    const currentCounter = cardsCounter.get(lineIndex);
    for (let i = lineIndex + 1; i <= lineIndex + winningPicks && i < lines.length; i++) {
      cardsCounter.set(i, cardsCounter.get(i) + currentCounter);
    }
  });

  console.log([...cardsCounter.values()].reduce((sum, card) => sum + card, 0));
});
