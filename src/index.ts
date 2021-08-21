const url = 'https://api.github.com/useXrs?per_page=5';

const fetchPromesa = fetch(url);

const manejaErrores = (res: Response) => {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
};

fetchPromesa
    .then(manejaErrores)
    .then(res => (res).json())
    .then(data => console.log('Data:', data))
    .catch(err => console.warn('Error en usuarios', err))
