const url = 'https://api.github.com/useXrs?per_page=5';

const fetchPromesa = fetch(url);

fetchPromesa
    .then(res => res.json())
    .then(data => console.log('Data:', data))
    .catch(err => console.log('Error en usuarios', err))
