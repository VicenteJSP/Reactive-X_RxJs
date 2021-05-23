import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');
const obs = {
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete!')
}

click$
    .pipe(
        tap<MouseEvent>(() => console.log('Tap')),
        // map(event => ({ 
        //     clientY: event.clientY, 
        //     clientX: event.clientX 
        // })),
        // first<MouseEvent>(e => e.clientY >= 150)
        map(({ clientX, clientY }) => ({ clientY, clientX })),
        first(e => e.clientY >= 150)
    )
    .subscribe(obs);