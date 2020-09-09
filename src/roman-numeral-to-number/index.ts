const numberNumeralMap: { [key: string]: number } = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

// TODO: https://medium.com/javascript-in-plain-english/algorithms-101-convert-roman-numerals-to-integers-in-javascript-d3aba86a43d4
const romanNumeralToNumber = (romanNumeral: string): number => {
  if (!romanNumeral) {
    return -1;
  }

  return (
    [...romanNumeral].reduce((sum: number, char: string, i: number) => {
      const curr = numberNumeralMap[char] ?? -1;
      const pre = numberNumeralMap[romanNumeral.charAt(i - 1)] ?? -1;
      if (curr <= pre) {
        sum += curr;
      } else {
        sum = sum - pre * 2 + curr;
      }
      return sum;
    }, 0) - 2
  );
};

export default romanNumeralToNumber;
