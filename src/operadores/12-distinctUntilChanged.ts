import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numeros$ = of<number | string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Array<Personaje> = [
    { nombre: 'Batman' },
    { nombre: 'Batgirl' },
    { nombre: 'Barbara' },
    { nombre: 'Robin' },
    { nombre: 'Batman' },
    { nombre: 'Batgirl' },
    { nombre: 'Demian' },
    { nombre: 'Batman' },
    { nombre: 'Batman' },
    { nombre: 'Demian' },
    { nombre: 'Batman' },
    { nombre: 'Batman' },
];

const personajes$ = from(personajes);

personajes$.pipe(
    distinctUntilChanged( ({nombre: n1}, {nombre:n2}) => n1 === n2 )
).subscribe(console.log)
