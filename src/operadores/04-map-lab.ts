import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum lorem cursus tincidunt condimentum. Etiam mattis orci a mauris pellentesque, ut aliquet enim dignissim. Praesent ut leo luctus, vestibulum sem pellentesque, tristique nulla. Proin euismod porttitor magna, in pretium mi posuere ac. Donec venenatis nibh massa, nec consectetur tellus ornare ac. Maecenas id odio maximus, accumsan diam at, facilisis libero. Curabitur mollis, justo sit amet elementum blandit, urna mauris gravida tortor, sit amet hendrerit metus lorem ut mi. Sed ornare ipsum quis consectetur placerat. Suspendisse sit amet facilisis purus, eu scelerisque ipsum.
<br><br>
Donec ac bibendum erat, at tempor orci. In at nisl semper, convallis nisi in, pulvinar nisl. Nunc eu ex nisi. Ut placerat libero a magna pretium cursus. Sed neque orci, tempor nec neque ut, mattis lacinia felis. Etiam interdum enim blandit rhoncus consequat. Etiam viverra felis ut mauris lacinia, sed luctus elit interdum. Nam sit amet euismod sem. Suspendisse eget iaculis odio.
<br><br>
Quisque et odio lectus. Morbi commodo gravida semper. Aliquam volutpat nisi magna. Cras vitae justo sed lectus gravida laoreet. Vivamus tincidunt auctor egestas. Nunc pulvinar libero non lectus placerat ultricies. Mauris viverra leo sed dignissim dictum. Praesent sed laoreet mauris, ut sodales justo. Proin elit purus, pharetra id diam ut, finibus fermentum quam. Ut feugiat nibh ac velit pharetra pellentesque. Nam posuere ipsum in nisi pharetra gravida. Aliquam arcu magna, dictum ut nunc nec, pellentesque lobortis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam laoreet felis vel eleifend pretium. Nulla nec diam tellus.
<br><br>
Ut porttitor a diam blandit vestibulum. Nam accumsan nisl quis tortor sagittis gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut justo massa. Donec a aliquam ante. Phasellus aliquet mi et mauris maximus dictum. Sed nec congue augue.
<br><br>
Duis orci justo, venenatis eu porttitor scelerisque, ultricies a odio. Donec rhoncus pharetra orci ut tempus. Suspendisse quis diam sem. Nam ultrices, mauris ut auctor convallis, leo diam lacinia mauris, sed sollicitudin libero dui quis ex. Sed vitae risus interdum orci blandit tincidunt a ac purus. Sed bibendum metus eget congue hendrerit. Donec interdum velit dolor, sit amet pulvinar odio accumsan quis. Etiam pretium ac metus ac rutrum. Maecenas vel ornare tortor. Sed sed enim vel urna convallis elementum. Fusce eu vulputate tellus, a convallis nisi.
<br><br>
Donec ac bibendum erat, at tempor orci. In at nisl semper, convallis nisi in, pulvinar nisl. Nunc eu ex nisi. Ut placerat libero a magna pretium cursus. Sed neque orci, tempor nec neque ut, mattis lacinia felis. Etiam interdum enim blandit rhoncus consequat. Etiam viverra felis ut mauris lacinia, sed luctus elit interdum. Nam sit amet euismod sem. Suspendisse eget iaculis odio.
<br><br>
Quisque et odio lectus. Morbi commodo gravida semper. Aliquam volutpat nisi magna. Cras vitae justo sed lectus gravida laoreet. Vivamus tincidunt auctor egestas. Nunc pulvinar libero non lectus placerat ultricies. Mauris viverra leo sed dignissim dictum. Praesent sed laoreet mauris, ut sodales justo. Proin elit purus, pharetra id diam ut, finibus fermentum quam. Ut feugiat nibh ac velit pharetra pellentesque. Nam posuere ipsum in nisi pharetra gravida. Aliquam arcu magna, dictum ut nunc nec, pellentesque lobortis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam laoreet felis vel eleifend pretium. Nulla nec diam tellus.
<br><br>
Ut porttitor a diam blandit vestibulum. Nam accumsan nisl quis tortor sagittis gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut justo massa. Donec a aliquam ante. Phasellus aliquet mi et mauris maximus dictum. Sed nec congue augue.
<br><br>
Duis orci justo, venenatis eu porttitor scelerisque, ultricies a odio. Donec rhoncus pharetra orci ut tempus. Suspendisse quis diam sem. Nam ultrices, mauris ut auctor convallis, leo diam lacinia mauris, sed sollicitudin libero dui quis ex. Sed vitae risus interdum orci blandit tincidunt a ac purus. Sed bibendum metus eget congue hendrerit. Donec interdum velit dolor, sit amet pulvinar odio accumsan quis. Etiam pretium ac metus ac rutrum. Maecenas vel ornare tortor. Sed sed enim vel urna convallis elementum. Fusce eu vulputate tellus, a convallis nisi.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Funcion que haga el calculo
const calcularPorcentajeScroll = (evento) => {
    const {
        clientHeight,
        scrollHeight,
        scrollTop
    } = evento.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams

const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
);
progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
});
