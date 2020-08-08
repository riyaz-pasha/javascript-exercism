//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
const thousands = ["", "M", "MM", "MMM"]

export const toRoman = (number) => {
  let roman = "";
  roman += ones[number % 10];

  number = parseInt(number / 10);
  roman = tens[number % 10] + roman;

  number = parseInt(number / 10);
  roman = hundreds[number % 10] + roman;

  number = parseInt(number / 10);
  roman = thousands[number % 10] + roman;
  return roman;

};
