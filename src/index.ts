import { Observable } from 'rxjs';

// const obs$ = Observable.crate();
const obs$ = new Observable<string>( subs => {
	subs.next('Hola');
	subs.next('Jennifer');

	subs.next('Hola');
	subs.next('Jennifer');

	subs.complete();

	subs.next('Hola');
	subs.next('Jennifer');

});

obs$.subscribe( console.log );
