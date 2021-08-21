import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Conten-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe(data => console.log('Data: ', data));
