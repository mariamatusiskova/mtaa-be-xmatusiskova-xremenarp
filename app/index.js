const config = require('./config.json');
const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("Hello");
});

// app.post()

app.listen(config.port, () => {
    console.log(`server running: http://${config.host}:${config.port}`);
});
