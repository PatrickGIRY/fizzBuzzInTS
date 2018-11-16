
let multipleOf: (m:number) => (n:number) => boolean =
  (m => n => n % m == 0);

let rules: {predicate :(n:number) => boolean ,mapping: string}[] = [
  {predicate: multipleOf(3), mapping: "Fizz"}
, {predicate: multipleOf(5), mapping: "Buzz"}
];

export function printIt(n:number):string {
  let result:string = rules
          .filter(({predicate}) => predicate(n))
          .map(({mapping}) => mapping)
          .join('');
  return result != "" ? result : n.toString();
}
