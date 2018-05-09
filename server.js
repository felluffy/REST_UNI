'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let contacts = require('./data');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/contacts', (request, response) => {
    if(!contacts){
        response.status(404).json({ message: 'No contacts found'});
    }
    response.json(contacts);
});

app.get('/api/contacts/:id', (request, response) => {
    const requestId = request.params.id;
    let contact = contacts.filter(contact => {
        return contact.id == requestId;
    })
});

const hostname = 'localhost';
const port = 5050;

app.listen(port, hostname, () => {
    console.log('server is running at http://${hostname}:${port}');
});
