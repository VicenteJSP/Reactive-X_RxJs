import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/deXlay/1';

const manejaError = (res: AjaxError) => {
    console.log('Error:', res.message);
    return of({});
};

// const obs$ = ajax.getJSON(url).pipe(catchError(manejaError));
// const obs2$ = ajax(url).pipe(catchError(manejaError));

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url).pipe(catchError(manejaError));

obs$.subscribe({
    next: val => console.log('Val:', val),
    error: err => console.log('Error:', err),
    complete: () => console.log('Complete'),
});
obs2$.subscribe({
    next: val => console.log('Val:', val),
    error: err => console.log('Error:', err),
    complete: () => console.log('Complete'),
});
