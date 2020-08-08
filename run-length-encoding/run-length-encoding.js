//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => (string.match(/(.)\1*/g) || [])
  .map(str => str.length === 1 ? str : `${str.length}${str[0]}`)
  .reduce((encodedString, currentEncoding) => encodedString += currentEncoding, "")

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};
