import { printIt } from '.';

describe('Fizzbuzz should', () => {
  test('print a string 1 when given an integer 1', () => {
    expect(printIt(1)).toEqual('1');
  });
  test('print a string 2 when given an integer 2', () => {
    expect(printIt(2)).toEqual('2');
  });
  test('print a string Fizz when given an integer 3', () => {
    expect(printIt(3)).toEqual('Fizz');
  });
  test('print a string Fizz when given an integer 6', () => {
    expect(printIt(6)).toEqual('Fizz');
  });
  test('print a string Buzz when given an integer 5', () => {
    expect(printIt(5)).toEqual('Buzz');
  });
  test('print a string FizzBuzz when given an integer 15', () => {
    expect(printIt(15)).toEqual('FizzBuzz');
  });
});
