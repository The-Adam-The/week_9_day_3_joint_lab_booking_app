const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;

const createRouter = require('./helpers/createRouter.js');

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
    .then(client => {
        const db = client.db('hotel');
        const bookingsCollection = db.collection('bookings');
        const bookingsRouter = createRouter(bookingsCollection);
        app.use('/api/bookings', bookingsRouter);
    })
    .catch( 
        console.err
    );

app.listen(5000, function() {
    console.log(`Listening on port ${this.address().port}`);
});