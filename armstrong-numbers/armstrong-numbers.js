//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numberLength = (number + "").length
  return number === (number + "")
    .split("")
    .reduce((sum, currentDigit) => sum += parseInt(currentDigit) ** numberLength, 0)
};
