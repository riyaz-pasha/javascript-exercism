//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  let annotedOutput = [];
  for (let row = 0; row < input.length; row++) {
    let annotedRow = ""
    for (let column = 0; column < input[row].length; column++) {
      if (input[row][column] === "*") annotedRow += "*"
      else annotedRow += getMinesCount(input, row, column) || " "
    }
    annotedOutput[row] = annotedRow;
  }
  return annotedOutput
}

const getMinesCount = (input, row, column) =>
  (input[row].substring(column - 1, column + 2)
    + (input[row - 1] || " ").substring(column - 1, column + 2)
    + (input[row + 1] || " ").substring(column - 1, column + 2)
  ).replace(/[^*]/g,"").length
