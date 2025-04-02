const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/submit', (req,res) => {
    const {name, year} = req.body;
    res.setEncoding(`Name: ${name}, Year: ${year}`);
});