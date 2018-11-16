import { printIt } from '.'

describe('Fizzbuzz should', () => {
  test('print a string 1 when given an integer 1', () => {
    expect(printIt(1)).toEqual("1");
  });
  test('print a string 2 when given an integer 2', () => {
    expect(printIt(2)).toEqual("2");
  });
});
