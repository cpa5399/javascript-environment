/* API for retrieving and deleting users. Private facing getters/setters uses the Fetch API.  */
import 'whatwg-fetch';
import getBaseUrl from './base-url';

const baseUrl = getBaseUrl();

export const getUsers = () => {
    return get('users');
};

export const deleteUser = (id) => {
    return del(`users/${id}`);
};

const get = (url) => {
    return fetch(baseUrl + url).then(onSuccess, onError);
};

const del = (url) => {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError);
};

const onSuccess = (response) => {
    return response.json();
};

const onError = (error) => {
    console.log(error); //eslint-disable-line no-console
};
