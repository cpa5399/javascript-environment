/* Provides functionality that uses the userAPI to display data. */

/* eslint-disable no-unused-vars */
import {getUsers, deleteUser} from './api/userApi';
import css from './index.css';

// Populates table in the markup with users
getUsers().then(result => {
    let userBody = '';
    result.forEach(user => {
        userBody += `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            </tr>`
    });
    
    global.document.getElementById('users').innerHTML = userBody;

    const deleteLinks = global.document.getElementsByClassName('deleteUser');

    // Adds click events for all delete links. Deletes user from db.json, and removes row from the DOM
    Array.from(deleteLinks, link => {
        link.onclick = (evt) => {
            evt.preventDefault();
            const element = event.target;
            deleteUser(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});

