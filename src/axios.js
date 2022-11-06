import axios from 'axios';

const BASE_URL = 'https://airtimecash-2cash.herokuapp.com';

export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
});