//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => input
  .map((row, rowIndex) => [...row]
    .map((column, columnIndex) => column === "*" ? column : getMinesCount(input, rowIndex, columnIndex) || " ")
    .join("")
  )

const getMinesCount = (input, row, column) => input
  .slice(row == 0 ? 0 : row - 1, row + 2)
  .reduce((minesCount, eachRow) => minesCount += eachRow.substring(column - 1, column + 2).replace(/[^*]/g, "").length, 0)
