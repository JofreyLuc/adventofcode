const fs = require('fs');

addToAdjacentGears = (line, 
    lineIndex, 
    gears, 
    startRange, 
    endRange,
    number) => {
    const lineSlice = line.slice(startRange, endRange);
    [...lineSlice].forEach((symbol, index) => {
        if (symbol === '*') {
            const key = startRange + index + '_' + lineIndex;
            if (gears.get(key)) {
                gears.get(key).push(number);
            } else {
                gears.set(key, [number]);
            }
        }
    });
}

fs.readFile('day3/day3.txt', 'utf8', (err, data) => {
    const lines = data.split('\n');
    const gears = new Map();
    lines.forEach((line, lineIndex) => {
        let numbersRegex = line.matchAll(/\d+/g);
        numbersRegex = Array.from(numbersRegex);
        numbersRegex.forEach(numberRegex => {
            const number = numberRegex[0];
            const index = numberRegex.index;
            const startRange = Math.max(index - 1, 0);
            const endRange = Math.min(index + String(number).length + 1, line.length - 1);

            if (lineIndex !== 0) {
                addToAdjacentGears(lines[lineIndex - 1], lineIndex - 1, gears, startRange, endRange, number);
            }

            addToAdjacentGears(lines[lineIndex], lineIndex, gears, startRange, endRange, number);

            if (lineIndex !== lines.length - 1) {
                addToAdjacentGears(lines[lineIndex + 1], lineIndex + 1, gears, startRange, endRange, number);
            }
        });
    });
    console.log([...gears.values()].reduce((sum, gear) => {
        if (gear.length === 2) {
            return sum + gear[0] * gear[1];
        }
        return sum;
        }, 0)
    );
});
