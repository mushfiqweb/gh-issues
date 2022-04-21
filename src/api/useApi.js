import axios from 'axios';
import store from 'store';
import { endpoints } from 'api';
import { useMemo } from 'react';

// eslint-disable-next-line no-undef
const baseURL = `${process.env['REACT_APP_API_PROTOCOL']}${process.env['REACT_APP_API_ENDPOINT']}`;

export default function useApi(setAuth = true) {       

    // useMemo both works for Performance improvement and prevent infinite loop!
    const api = useMemo(() => {        

        // Axios instance
        const api = axios.create({
            baseURL,
        });

        // Set access token using axios request interceptor
        api.interceptors.request.use(
            (config) => {
                // Token from localStorage
                const token = store.get('access_token');
                const token_type = store.get('token_type');

                if (setAuth && token) {
                    config.headers['Authorization'] = `${token_type} ` + token;
                }

                return config;
            },
            (error) => {
                Promise.reject(error);
            }
        );

        // Handle refresh token using axios response interceptor
        api.interceptors.response.use(
            (response) => {                
                return response;
            },
            (error) => {                
                const originalRequest = error.config;

                // Prevent infinite loop when refresh token request is 401;
                if (
                    setAuth &&
                    error.response.status === 401 &&
                    originalRequest.url === `${baseURL}${endpoints.TOKEN}`
                ) {
                    return Promise.reject(error);
                }

                if (
                    setAuth &&
                    error.response.status === 401 &&
                    !originalRequest._retry
                ) {
                    originalRequest._retry = true;

                    // Refresh token from localStorage
                    const refreshToken = store.get('refresh_token');

                    // Refresh token request body
                    const data = new FormData();
                    data.append('grant_type', 'refresh_token');
                    data.append('refresh_token', refreshToken);

                    return axios
                        .post(endpoints.TOKEN, data, {
                            auth: {
                                // eslint-disable-next-line no-undef
                                username: process.env['REACT_APP_CLIENT_ID'],
                                // eslint-disable-next-line no-undef
                                password:
                                    // eslint-disable-next-line no-undef
                                    process.env['REACT_APP_CLIENT_SECRET'],
                            },
                        })
                        .then((res) => {
                            if (res.status === 200 && res.data) {
                                const new_access_token = res.data.access_token;
                                const new_refresh_token =
                                    res.data.refresh_token;

                                // Set new tokens to localStorage
                                store.set('access_token', new_access_token);
                                store.set('refresh_token', new_refresh_token);

                                api.defaults.headers.common['Authorization'] =
                                    'Bearer ' + new_access_token;
                                return api(originalRequest);
                            }
                        })
                        .catch((err) => {
                            // Reset tokens to localStorage if refresh token failed
                            store.set('access_token', '');
                            store.set('refresh_token', '');
                        });
                }

                return Promise.reject(error);
            }
        );

        return api;
    }, [setAuth]);

    return [api];
}
