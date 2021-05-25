import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const obs = {
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete!')
};

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(obs);