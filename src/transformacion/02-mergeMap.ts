import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

const letras$ = of('a', 'b', 'c');

letras$
    .pipe(
        mergeMap((letra) => interval(1000)
            .pipe(
                map(i => `${i}${letra}`),
                take(3)
            )
        )
    )
// .subscribe({
//     next: val => console.log('Next:', val),
//     complete: () => console.log('Complete')
// });

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( _ => interval$.pipe(
        takeUntil( mouseUp$ )
    ) )
)
.subscribe(console.log)
