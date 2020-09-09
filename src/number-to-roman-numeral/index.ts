const numberToRomanNumeral = (number: number) => {
  const numberNumeralMap: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  return Object.keys(numberNumeralMap).reduce(
    (numeral: string, numeralKey: string) => {
      const q = Math.floor(number / numberNumeralMap[numeralKey]);
      number -= q * numberNumeralMap[numeralKey];
      numeral += numeralKey.repeat(q);
      return numeral;
    },
    '',
  );
};

export default numberToRomanNumeral;
