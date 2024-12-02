const fs = require('fs');

drawToColors = (draw) => {
    const colors = draw.split(',');

    return {
        red: getColorInColors(colors, 'r'),
        green: getColorInColors(colors, 'g'),
        blue: getColorInColors(colors, 'b')
    };
}

getColorInColors = (colors, colorCode) => {
    let targetColor = colors.find(color => color.includes(colorCode));
    if (targetColor) {
        return Number(targetColor.slice(0, -1));
    } 
    return 0;
}

fs.readFile('day2/day2.txt', 'utf8', (err, data) => {
    const lines = data.replaceAll(' ', '').replaceAll('green', 'g').replaceAll('red', 'r').replaceAll('blue', 'b').split('\n');
    console.log(lines.map(line => {
        const game = line.split(':');
        const gameId = game[0].slice(4);
        const draws = game[1].split(';');

        const maxCubes = draws.reduce((maxColors, draw) => {
            const colors = drawToColors(draw);
            return {
                red: Math.max(maxColors.red, colors.red),
                green: Math.max(maxColors.green, colors.green),
                blue: Math.max(maxColors.blue, colors.blue),
            };
        }, {red: 0, green: 0, blue: 0});

        return maxCubes.red * maxCubes.green * maxCubes.blue;
      }).reduce((sum, elem) => sum + elem, 0)
    );
});
