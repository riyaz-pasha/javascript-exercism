//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => {
  let encodedString = ""
  let prevChar
  let count = 0
  for (let char of string) {
    if (prevChar === undefined) { prevChar = char; count = 1 }
    else if (prevChar === char) count++;
    else {
      if (count === 1) encodedString += `${prevChar}`
      else encodedString += `${count}${prevChar}`
      count = 1
      prevChar = char
    }
  }
  if (count === 1) encodedString += `${prevChar}`
  else if (prevChar) encodedString += `${count}${prevChar}`
  return encodedString
};

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};
