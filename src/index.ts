import { fromEvent, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";


const boton = document.createElement('button');
boton.innerText = 'Detener Timer';

document.querySelector('body').append(boton);

const click$   = fromEvent<MouseEvent>(boton, 'click');
const counter$ = interval(1000).pipe(
    takeUntil(click$)
);

counter$.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completado')
})
