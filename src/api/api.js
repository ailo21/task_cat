import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'API-KEY': 'ba9b7687-144f-4c2b-9f74-81096c93b28a',
  },
});

export function fetchCat() {
  return instance
    .get('/images/search')
    .then((response) => response.data);
}
