import { interval, range } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const arr = [1, 2, 3, 4, 5];
const reducer = (a: number, c: number) => a + c;
const obs$ = range(1, 5);
const obsr = {
    next: val => console.log('Next:', val),
    complete: () => console.log('Completado!'),
}

console.log(arr.reduce(reducer, 0));
obs$.pipe(reduce(reducer, 0)).subscribe(console.log);

interval(1000)
    .pipe(
        take(6),
        tap(console.log),
        reduce(reducer, 0)
    )
    .subscribe(obsr);