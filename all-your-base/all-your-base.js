//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isValid = (inputSeqArr, inputBase) => inputSeqArr.length > 0
  && inputSeqArr[0] !== 0
  && !inputSeqArr.some(number => number < 0)
  && !inputSeqArr.some(number => number >= inputBase)

const isValidBase = (base) => base >= 2 && parseInt(base) === base


const getNumberInBase10 = (inputSeqArr, inputBase) => inputSeqArr
  .reduce((sum, currentNumber, currentIndex, { length }) => sum += (currentNumber * inputBase ** (length - 1 - currentIndex)), 0);

export const convert = (inputSeqArr, inputBase, outputBase) => {

  if (!isValidBase(inputBase)) throw new Error('Wrong input base');
  if (!isValidBase(outputBase)) throw new Error('Wrong output base');
  if (inputSeqArr.length === 1 && inputSeqArr[0] === 0) return [0]
  if (!isValid(inputSeqArr, inputBase)) throw new Error('Input has wrong format');

  let inputNumberInBase10 = getNumberInBase10(inputSeqArr, inputBase)

  let numberInOutputBase = []
  while (inputNumberInBase10 !== 0) {
    numberInOutputBase = [inputNumberInBase10 % outputBase, ...numberInOutputBase]
    inputNumberInBase10 = parseInt(inputNumberInBase10 / outputBase)
  }

  return numberInOutputBase
};
