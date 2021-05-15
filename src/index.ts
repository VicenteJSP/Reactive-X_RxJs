import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: value => console.log(`Next [Observer]: ${value}`),
	error: error => console.warn(`Error [Observer]: ${error}`),
	complete: () => console.info('Completado [Observer]'),
}