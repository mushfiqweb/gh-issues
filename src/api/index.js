import endpoints from './endpoints';
import axios from 'axios';
import useApi from './useApi';

// eslint-disable-next-line no-undef
const baseURL = `${process.env['REACT_APP_API_PROTOCOL']}${process.env['REACT_APP_API_ENDPOINT']}`;

// Axios instance
const api = axios.create({
    baseURL,
});

export default api;

export { endpoints, baseURL, useApi };
