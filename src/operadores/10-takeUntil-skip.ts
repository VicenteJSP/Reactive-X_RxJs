import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";


const boton = document.createElement('button');
boton.innerText = 'Detener Timer';

document.querySelector('body').append(boton);

// const click$   = fromEvent<MouseEvent>(boton, 'click');
const click$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    tap(() => console.log('tap Antes del skip')),
    skip(1),
    tap(() => console.log('tap Despues del skip'))
);
const counter$ = interval(1000).pipe(
    takeUntil(click$)
);

counter$.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completado')
})
