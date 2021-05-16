import { Observer, of } from 'rxjs';

const observer: Observer<any> = {
    next: next => console.log('next: ', next),
    error: null,
    complete: () => console.log('Terminamos la secuencia!')
}

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 5, 6);
const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));

console.log('Iniciamos la secuencia obs$')
obs$.subscribe(observer)
console.log('Finalizamos la secuencia obs$')
