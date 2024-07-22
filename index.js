const express = require('express');
const routes = require('./routes');
// crear APP Express

const app = express();

//Ruta Base Home

app.use('/',routes());

app.listen(3000);