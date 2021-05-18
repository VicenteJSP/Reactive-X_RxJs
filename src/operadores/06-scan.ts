import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcomulador = (a: number, c: number) => a + c;
const reduce$ = from(numeros).pipe(
    reduce(totalAcomulador, 0)
);
const scan$ = from(numeros).pipe(
    scan(totalAcomulador, 0)
);

scan$.subscribe(console.log)
reduce$.subscribe(console.log)

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Array<Usuario> = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur) => {
        return { ...acc, ...cur };
    }, { edad: 33 }),
);

const id$ = state$.pipe(map(usuario => usuario.id));
id$.subscribe(console.log);
