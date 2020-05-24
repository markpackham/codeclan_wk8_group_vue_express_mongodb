const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());




MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('country_facts');
        const factsCollection = db.collection('facts');
        const factsRouter = createRouter(factsCollection);
        app.use('/api/facts', factsRouter)
    })

    .catch(console.err);

app.listen(3000, function() {
    console.log(`Listening on port ${ this.address().port}`);
});