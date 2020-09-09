import numberToRomanNumeral from './index';

describe(numberToRomanNumeral, () => {
  it('should be a function', () => {
    expect(numberToRomanNumeral).toBeDefined();
  });

  it.each`
    num   | numeral
    ${1}  | ${'I'}
    ${2}  | ${'II'}
    ${3}  | ${'III'}
    ${4}  | ${'IV'}
    ${5}  | ${'V'}
    ${6}  | ${'VI'}
    ${7}  | ${'VII'}
    ${8}  | ${'VIII'}
    ${9}  | ${'IX'}
    ${10} | ${'X'}
  `('returns $numeral when number is $num', ({ num, numeral }) => {
    expect(numberToRomanNumeral(num)).toBe(numeral);
  });
});
