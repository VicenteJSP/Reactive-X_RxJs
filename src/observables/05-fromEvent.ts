import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer1 = {
    next: ({ x, y }: MouseEvent) => console.log('x: ', x, 'y: ', y)
}

const observer2 = {
    next: ({ key }: KeyboardEvent) => console.log('Key: ', key)
}

src1$.subscribe(observer1);
src2$.subscribe(observer2);
