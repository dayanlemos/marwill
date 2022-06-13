const API_ENDPOINT = 'http://gateway.marvel.com';
const API_KEY = 'dc1f0549b5d5924f62633bd775ccbe0f';


const apiFetch = ({ path }) => new Promise((resolve, reject) => {
    fetch(`${API_ENDPOINT}${path}?apikey=${API_KEY}&nameStartsWith=spider-man`)
        .then((response) => (response.json())
        .then((jsonResponse) => {
            resolve(jsonResponse.data);
        }))
});

export default apiFetch;
