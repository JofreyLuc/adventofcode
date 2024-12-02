const fs = require('fs');

fs.readFile('2024/day2/day2.txt', 'utf8', (err, input) => {
  const lines = input.split('\n');

  const reports = lines.map(line => {
    const report = line.split(' ').map(Number);
    const reportTries = report.map((_, i) => verifyReport(arrayWithoutIndex(report, i)));
    return reportTries.reduce((acc, curr) => acc || curr, false);
  });

  console.log(reports.filter(r => !!r).length);
});


function arrayWithoutIndex(arr, index) {
  return arr.filter((_, i) => i !== index);
}


function verifyReport(report) {
  const isAscending = report[0] < report[1];
  for (let i = 1; i < report.length; i++) {
    if (isAscending) {
      if (report[i - 1] !== report[i] - 1 && report[i - 1] !== report[i] - 2 && report[i - 1] !== report[i] - 3) {
        return false;
      }
    } else {
      if (report[i - 1] !== report[i] + 1 && report[i - 1] !== report[i] + 2 && report[i - 1] !== report[i] + 3) {
        return false;
      }
    }
  }

  return true;
}


