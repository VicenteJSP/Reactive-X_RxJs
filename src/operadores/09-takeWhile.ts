import { fromEvent } from "rxjs";
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150)
    takeWhile(({ y }) => y <= 150, true)
);

click$.subscribe({
    next: val => console.log('mext: ', val),
    complete: () => console.log('Completado!')
});
