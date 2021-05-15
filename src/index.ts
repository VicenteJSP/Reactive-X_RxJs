import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: value => console.log(`Next [Observer]: ${value}`),
	error: error => console.warn(`Error [Observer]: ${error}`),
	complete: () => console.info('Completado [Observer]'),
}

// const obs$ = Observable.crate();
const obs$ = new Observable<string>(subs => {
	subs.next('Hola');
	subs.next('Jennifer');

	subs.next('Hola');
	subs.next('Jennifer');

	// Forzar error
	// let a = undefined;
	// a.nombre = 'Vicente';

	subs.complete();

	subs.next('Hola');
	subs.next('Jennifer');

});

// obs$.subscribe(
// 	valor => console.log(`Next: ${valor}`),
// 	err => console.warn(`Error: ${err}`),
// 	() => console.info('Completado')
// );

obs$.subscribe(observer);
