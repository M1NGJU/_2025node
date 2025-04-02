const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/submit', (req,res) => {
    const {name, year} = req.body;
    res.setEncoding(`Name: ${name}, Year: ${year}`);
});