import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Mundo!');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 1000)
// asyncScheduler.schedule(saludar2, 1000, 'Jennifer')
const subs = asyncScheduler.schedule(function (state) {
    console.log('State: ', state);
    this.schedule(state + 1, 1000)
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
