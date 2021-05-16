import { asyncScheduler, of, range } from 'rxjs';

console.log('Inicio')
// const src$ = of(1,2,3,4,5);
// src$.subscribe(console.log)
const obs$ = range(1,5, asyncScheduler);
obs$.subscribe(console.log)
console.log('Final')
