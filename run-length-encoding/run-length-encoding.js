//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => (string.match(/(.)\1*/g) || [])
  .map(str => str.length === 1 ? str : `${str.length}${str[0]}`)
  .reduce((encodedString, currentEncoding) => encodedString += currentEncoding, "")

export const decode = (encodedString) => (encodedString.match(/\d*[A-Z a-z]{1}/g) || [])
  .map(str => str.length === 1 ? str : `${str[str.length - 1].repeat(parseInt(str.substring(0, str.length - 1)))}`)
  .reduce((encodedString, currentEncoding) => encodedString += currentEncoding, "")
