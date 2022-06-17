const API_ENDPOINT = 'https://gateway.marvel.com/v1/public/characters';
const API_KEY = 'dc1f0549b5d5924f62633bd775ccbe0f';
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export const localFetch = ({ fileName }) => new Promise((resolve, reject) => {
    fetch(`assets/static-data/${fileName}.json`, {
        headers: DEFAULT_HEADERS})
        .then(res => res.json())
        .then(data => resolve(data));
});


export const apiFetch = ({ offset, term }) => new Promise((resolve, reject) => {
    fetch(`${API_ENDPOINT}?apikey=${API_KEY}${offset ? '&offset='+offset : ''}${term ? '&nameStartsWith='+term : ''}`, {
        headers: DEFAULT_HEADERS})
        .then(res => res.json())
        .then(jsonRes => resolve(jsonRes.data));
});
