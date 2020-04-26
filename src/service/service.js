import axios from 'axios';

export function getGlobalData() {
    const url = 'https://corona-api.com/countries';
    const data = axios.get(url);
    return data;
}