import { fromEvent, interval } from "rxjs";
import { concatMap, switchMap, take } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$
// .pipe(
//     switchMap( _ => interval$)
// )
.pipe(
    concatMap( _ => interval$)
)
.subscribe(console.log);
