const config = require('./config.json');
const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();

// Database connection for endpoints needs
// by learn4you
const mongoUri = process.env.MONGO_URI || config.mongo.uri;
MongoClient.connect(mongoUri, {useUnifiedTopology: true}, (err, client) => {
  if (err) {
    console.error(err.message);
    process.exit(0);
  }
  const db = client.db(config.mongo.db);
});
//

app.get('/', (req, res) => {
    res.send("Hello");
});

// app.post()

app.listen(config.port, () => {
    console.log(`server running: http://${config.host}:${config.port}`);
});
