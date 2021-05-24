import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$
    .pipe(distinct())
    .subscribe(console.log);

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
    distinct( p => p.nombre )
)
.subscribe(console.log)
