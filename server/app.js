const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route.
app.get('/', (req, res) => {
    res.status(200).send("Hello People.")
});

// handle client site error.
app.use((req, res, next) => {
    res.status(404).send('Not found.');
});

// handle server site error.
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(400).send('Something went to wrong.');
});

module.exports = app;

