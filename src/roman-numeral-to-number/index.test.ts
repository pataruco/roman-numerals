import romanNumeralToNumber from './index';

describe(romanNumeralToNumber, () => {
  it('should be a function', () => {
    expect(romanNumeralToNumber).toBeDefined();
  });

  it.each`
    num     | numeral
    ${1}    | ${'I'}
    ${2}    | ${'II'}
    ${3}    | ${'III'}
    ${4}    | ${'IV'}
    ${5}    | ${'V'}
    ${6}    | ${'VI'}
    ${7}    | ${'VII'}
    ${8}    | ${'VIII'}
    ${9}    | ${'IX'}
    ${10}   | ${'X'}
    ${2000} | ${'MM'}
    ${2020} | ${'MMXX'}
    ${1978} | ${'MCMLXXVIII'}
  `('returns $num when numberal is $numeral', ({ num, numeral }) => {
    expect(romanNumeralToNumber(numeral)).toBe(num);
  });
});
