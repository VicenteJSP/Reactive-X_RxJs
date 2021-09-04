import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, mergeMap, pluck } from "rxjs/operators";
import { GithubUser } from "./interfaces/github-user.interface";
import { GithubUsersResp } from "./interfaces/github-users.interface";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

const mostrarUsuarios = (usuarios: Array<GithubUser>) => {

    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = usuario.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver perfil';
        anchor.target = '_blank';

        li.append(img);
        li.append(`${usuario.login} `);
        li.append(anchor);

        orderList.append(li)
    }

};

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    pluck<GithubUsersResp, Array<GithubUser>>('items')
)
// .subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$
.pipe(
    pluck('target', 'value'),
    mergeMap( texto => ajax.getJSON(`${url}${texto}`) )
)
.subscribe(console.log)