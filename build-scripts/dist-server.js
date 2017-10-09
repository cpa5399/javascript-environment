/* Serves the static dist folder for production. No longer integrates with Webpack */

import express from 'express';
import path from 'path';
import compression from 'compression';

const port = 3000;
const app = express();

/* eslint-disable no-console */

/* The following two lines are not something you would use in production.
/*  This is to only test the production build on your local machine. */
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
    res.json([
        {"id": 1, "firstName": "Camille", "lastName": "Ali"},
        {"id": 2, "firstName": "Batman", "lastName": "Chicken"},
        {"id": 3, "firstName": "Bob", "lastName": "Smith"}
    ]);
});

app.listen(port, (err) => {
    if(err){ console.log(err) }
});
