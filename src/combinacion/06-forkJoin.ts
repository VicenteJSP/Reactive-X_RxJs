import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const numeros$  = of(1,2,3,4);
const interval$ = interval(1000).pipe(take(3));
const letras$  = of('a','b','c').pipe(delay(3500)); 

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// ).subscribe( console.log );

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// ).subscribe(
//     ([numeros, intervalo, letras]) => {
//         console.log('numeros',numeros);
//         console.log('intervalo',intervalo);
//         console.log('letras',letras);
//         console.log( { numeros, intervalo, letras } )
//     }
// );

// forkJoin({
//     numeros$,
//     interval$,
//     letras$
// }).subscribe(
//     res => console.log(res)
// );


forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$
}).subscribe(
    res => console.log(res)
);