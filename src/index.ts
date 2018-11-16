
type NumberPredicate = (n: number) => boolean;

interface Rule {
  readonly predicate: NumberPredicate;
  readonly mapping: string;
}

const multipleOf: (m: number) => (n: number) => boolean =
  (m => n => n % m === 0);

const rules: Rule[] = [
  { predicate: multipleOf(3), mapping: 'Fizz' },
  { predicate: multipleOf(5), mapping: 'Buzz' },
];

export function printIt(n:number):string {
  const result: string = rules
          .filter(({ predicate }) => predicate(n))
          .map(({ mapping }) => mapping)
          .join('');
  return result !== '' ? result : n.toString();
}
