//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  const radius = (x ** 2 + y ** 2) ** (1 / 2)
  if (radius <= 1) return 10;
  if (radius <= 5) return 5;
  if (radius <= 10) return 1;
  return 0;
};
