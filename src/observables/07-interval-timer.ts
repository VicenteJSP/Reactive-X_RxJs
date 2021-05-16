import { interval, timer } from 'rxjs';

const obs = {
    next: value => console.log('next: ', value),
    complete: () => console.log('Completado')
}

const hoyEn5 = new Date(); // Ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);
console.log('Inicio');
// interval$.subscribe(obs);
timer$.subscribe(obs);
console.log('Final');