import axios from 'axios';
import { API_KEY, API_URL } from '@env';

const movieDB = axios.create({
    baseURL: `${API_URL}`,
    params: {
        api_key: `${API_KEY}`,
        language: 'es-ES'
    }
});

export default movieDB;