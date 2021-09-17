import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER    = 'vicentejsp';

const usuario$ = ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`);
const repos$ = ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`)
// const repos$ = ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repo123s`)
//     .pipe(catchError( err => of(err) ));
const gist$ = ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists `);

forkJoin({
    usuario: usuario$,
    repos: repos$,
    gits: gist$,
})
.pipe(catchError( err => of(err) ))
.subscribe(console.log);