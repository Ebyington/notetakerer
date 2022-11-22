const express = require('express');
const API = require('./routes/notes')
const home = require('./routes/index')
const fs = require('fs');
// const path= require('path');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/api',  API);
app.use('/', home);

app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
    });