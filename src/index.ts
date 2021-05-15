import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: value => console.log(`next: ${value}`),
	error: error => console.warn(`error: ${error}`),
	complete: () => console.info('completado!'),
}

const intervalo$ = new Observable<number>(
	subscriber => {
		let numero = 0;
		const interval = setInterval( () => {
			numero++;
			subscriber.next(numero);
			console.log(numero);
		}, 1000);

		return () => {
			clearInterval(interval);
			console.log('Intervalo destruido!');
		}
	}
);

const subscription = intervalo$.subscribe(numero => console.log(`numero: ${numero}`));

setTimeout(() => {
	subscription.unsubscribe();
}, 3000);
