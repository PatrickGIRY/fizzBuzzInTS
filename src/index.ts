
let multipleOf: (m:number) => (n:number) => boolean =
  (m => n => n % m == 0);

let rules: [(n:number) => boolean ,string][] = [
  [multipleOf(3), "Fizz"]
, [multipleOf(5), "Buzz"]
];

export function printIt(n:number):string {
  let result:string = rules
          .filter(rule => rule[0](n))
          .map(rule => rule[1])
          .reduce((r, s) => r += s, "");
  return result != "" ? result : n.toString();
}
