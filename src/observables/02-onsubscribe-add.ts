import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: value => console.log(`next: ${value}`),
	error: error => console.warn(`error: ${error}`),
	complete: () => console.info('completado!'),
}

const intervalo$ = new Observable<number>(
	subscriber => {
		let numero = 0;
		const interval = setInterval(() => {
			numero++;
			subscriber.next(numero);
			console.log(numero);
		}, 1000);

		setTimeout(() => {
			subscriber.complete();
		}, 2500);

		return () => {
			clearInterval(interval);
			console.log('Intervalo destruido!');
		}
	}
);

// const subscription = intervalo$.subscribe(numero => console.log(`numero: ${numero}`));
const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1
	.add(subscription2)
	.add(subscription3)

setTimeout(() => {
	subscription1.unsubscribe();
	// subscription2.unsubscribe();
	// subscription3.unsubscribe();
	console.log('Completado TimeOut!')
}, 6000);
