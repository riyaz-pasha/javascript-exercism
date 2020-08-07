//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const CODON_LENGTH = 3;
const TerminatingCodons = ["UAA", "UAG", "UGA"];

const codonToProtien = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
}

const isEmpty = (rnaSequence) => rnaSequence === null || rnaSequence === undefined;

const isValid = (rnaSequence) => rnaSequence.length % CODON_LENGTH !== 0;

const getRnaTranslation = (rnaSequence) => {
  let protiens = [];
  for (let codon of rnaSequence.match(/.{3}/g)) {
    if (TerminatingCodons.includes(codon)) break;
    if (!codonToProtien[codon]) throw Error("Invalid codon");
    protiens.push(codonToProtien[codon]);
  };

  return protiens;
}

export const translate = (rnaSequence) => {
  if (isEmpty(rnaSequence)) return []
  if (isValid(rnaSequence)) throw Error("Invalid codon")
  return getRnaTranslation(rnaSequence);
};
