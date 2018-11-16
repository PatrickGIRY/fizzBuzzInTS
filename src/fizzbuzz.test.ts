import { printIt } from '.'

describe('Fizzbuzz should', () => {
  test('print a string 1 when given an integer 1', () => {
    expect(printIt(1)).toEqual("1");
  });
});
