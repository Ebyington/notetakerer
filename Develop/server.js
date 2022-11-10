const express = require('express');
const API = require('./public/assets/js/index.js')
const fs = require('fs');
const path= require('path');
const app = express();
const PORT = process.env.PORT || 3111;


app.use('/notes',  API);

app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>  {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

