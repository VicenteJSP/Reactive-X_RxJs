import { fromEvent } from 'rxjs'
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

const obs = {
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
}

const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(1000)
)//.subscribe(obs);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(obs);
