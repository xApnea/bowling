const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/../public')));


app.get('/api', (req, res) => {
  res.status(200).send('Request was good.');
})


const port = process.env.PORT || 3000;
var server = app.listen(port, () => {console.log(`Listening on port: ${port}`)});

module.exports = server;