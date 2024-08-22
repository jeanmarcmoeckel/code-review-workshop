import { Processor } from './data.processor';
import { Data } from './data.types';

const p = new Processor();

const d1: Data = { a: 'First', b: 2, c: [1, 2, 3] };
const d2: Data = { a: 'Second', b: 3, c: [4, 5] };

p.z(d1);
p.z(d2);

console.log(`Total: ${p.w()}`);
console.log(`Names: ${p.v().join(', ')}`);