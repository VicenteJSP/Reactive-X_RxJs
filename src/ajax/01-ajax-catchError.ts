import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const fetchPromesa = fetch(url);

const manejaErrores = (res: Response) => {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
};

const atrapaErrores = (err: AjaxError) => {
    console.warn('Error en', err.message);
    return of({})
};

// fetchPromesa
//     .then(manejaErrores)
//     .then(res => (res).json())
//     .then(data => console.log('Data:', data))
//     .catch(err => console.warn('Error en usuarios', err))

ajax(url)
    // .pipe( map( res => res.response ) )
    .pipe(
        pluck('response'),
        catchError( atrapaErrores )
    )
    .subscribe( users => console.log('Usuarios: ',users) );
