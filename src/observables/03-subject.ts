import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
	next: value => console.log(`next: ${value}`),
	error: error => console.warn(`error: ${error}`),
	complete: () => console.info('completado!'),
}

const intervalo$ = new Observable<number>(subs => {
	const interval =
		setInterval(() => subs.next(Math.random()), 1000);

	return () => {
		clearInterval(interval);
		console.log('Observable destruido!')
	}
});

/**
 * 1.- Casteo multiple
 * 2.- Tambien es un observer
 * 3.- Next, Error y Complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe( rnd => console.log(`Subs1 ${rnd}`));
// const subs2 = intervalo$.subscribe( rnd => console.log(`Subs2 ${rnd}`));

// const subs1 = subject$.subscribe( rnd => console.log(`Subs1 ${rnd}`));
// const subs2 = subject$.subscribe( rnd => console.log(`Subs2 ${rnd}`));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
	subject$.next(10);
	subject$.complete();
	subscription.unsubscribe();
}, 3500);
