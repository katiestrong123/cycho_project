const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; // Grabbing the MongoClient straight from MongoDB
const cors = require('cors');
const createRouter = require('./helpers/create_router');
 
app.use(parser.json());
app.use(cors());
 
MongoClient.connect("mongodb://localhost:27017")
.then((client) => {
const db = client.db('cycho_bike_repair');
const cychoCollection = db.collection('cychos');
const cychoRouter = createRouter(cychoCollection);
app.use('/api/cychos', cychoRouter);
})
.catch(console.error);
 
app.listen(3000, function () {
console.log(`Listening on port ${ this.address().port }`);
});
