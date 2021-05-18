import { range, from, fromEvent } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

const obs$ = range(20, 30);
// const obsFilter$ = obs$.pipe(filter( e => e % 2 === 1));
const obsFilter$ = obs$.pipe(filter((e, i) => {
    console.log('index', i);
    return e % 2 === 1
}));

interface Personaje {
    nombre: string;
    tipo: string;
}

const personajes: Array<Personaje> = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
]

const obsPersonajes$ = from(personajes);
const heroe$ = obsPersonajes$
    .pipe(filter(p => p.tipo === 'heroe'));
const villano$ = obsPersonajes$
    .pipe(filter(p => p.tipo === 'villano'))

// obsFilter$.subscribe(console.log);
// heroe$.subscribe(console.log);
villano$.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupEncadenado$ = keyup$.pipe(
    map( e => e.code),
    filter( code => code === 'Enter')
);

keyupEncadenado$.subscribe(console.log);
