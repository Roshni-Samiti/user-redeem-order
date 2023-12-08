// app.js

const express = require('express');
const bodyParser = require('body-parser');
const dataRoutes = require('./dataRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use(dataRoutes);

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
