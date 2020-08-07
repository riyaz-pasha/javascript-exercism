//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const reducer = () => (sum, currentDigit, _, { length }) => (sum += parseInt(currentDigit) ** length);

export const isArmstrongNumber = (number) => number === [...number.toString()].reduce(reducer(), 0)
