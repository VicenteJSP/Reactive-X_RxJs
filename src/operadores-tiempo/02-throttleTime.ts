import { asyncScheduler, fromEvent } from 'rxjs'
import { distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators';

const obs = {
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
}

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(1000)
)//.subscribe(obs);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
    throttleTime(400, asyncScheduler,{
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(obs);
