import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";

// range(1, 5)
//     .pipe(
//         map<number, string>(n => (n * 10).toString())
//     )
//     .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(map(e => e.code));

keyupCode$.subscribe(code => console.log('map: ', code));