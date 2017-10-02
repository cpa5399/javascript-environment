/* eslint-disable no-unused-vars */
import {getUsers} from './api/userApi';
import css from './index.css';

getUsers().then(result => {
    let userBody = '';
    result.forEach(user => {
        userBody += `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            </tr>`
    });
    
    global.document.getElementById('users').innerHTML = userBody;
});

