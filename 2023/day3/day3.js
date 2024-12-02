const fs = require('fs');

isCharInLineInRange = (line, startRange, endRange) => {
    const strippedSlice = line.slice(startRange, endRange).replaceAll(/\d+/g, '').replaceAll('.', '');
    return !!strippedSlice.length;
}

fs.readFile('day3/day3.txt', 'utf8', (err, data) => {
    const lines = data.split('\n');
    console.log(lines.map((line, lineIndex) => {
        let numbersRegex = line.matchAll(/\d+/g);
        numbersRegex = Array.from(numbersRegex);
        const validNumbers = numbersRegex.filter(numberRegex => {
            const number = numberRegex[0];
            const index = numberRegex.index;
            const startRange = Math.max(index - 1, 0);
            const endRange = Math.min(index + String(number).length + 1, line.length - 1);

            let keepNumber = false;

            if (lineIndex !== 0) {
                keepNumber = keepNumber || isCharInLineInRange(lines[lineIndex - 1], startRange, endRange);
            }

            keepNumber = keepNumber || isCharInLineInRange(lines[lineIndex], startRange, endRange);

            if (lineIndex !== lines.length - 1) {
                keepNumber = keepNumber || isCharInLineInRange(lines[lineIndex + 1], startRange, endRange);
            }

            return keepNumber;

        });

        return validNumbers.reduce((sum, elem) => sum + Number(elem[0]), 0)

      }).reduce((sum, elem) => sum + elem, 0)
    );
});
