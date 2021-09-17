import { ajax } from "rxjs/ajax";
import { startWith } from "rxjs/operators";

// Referencias
const loadingDiv: HTMLDivElement = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.body;

// Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true)
)
.subscribe(
    res => {
        if(res === true) {
            body.append(loadingDiv);
        } else {
            document.querySelector('.loading').remove();
        }
        // console.log(res)
    }
);
