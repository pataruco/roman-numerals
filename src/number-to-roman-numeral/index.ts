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

  const numeralKeys = Object.keys(numberNumeralMap);

  return numeralKeys.reduce((numeral: string, numeralKey: string) => {
    const positionNumber = Math.floor(number / numberNumeralMap[numeralKey]);
    number = number - positionNumber * numberNumeralMap[numeralKey];
    numeral = numeral + numeralKey.repeat(positionNumber);
    return numeral;
  }, '');
};

export default numberToRomanNumeral;
