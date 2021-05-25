import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const obs = {
    next: val => console.log('next: ', val),
    complete: () => console.log('Completado!')
};

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y }))
).subscribe(obs);
