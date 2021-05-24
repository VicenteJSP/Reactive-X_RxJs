import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)
