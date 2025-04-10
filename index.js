// index.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const urlRoute = require('./routes/url');

const app = express();
const port = 5001;

mongoose.connect('mongodb+srv://ipl_lsg_team:S9n2k%40sh58@akscluster.z0f9q.mongodb.net/url_shortener?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.set('port', port);
app.use('/', urlRoute);

app.get('/', async (req, res) => {
    const Url = require('./model/url');
    const history = await Url.find().sort({ _id: -1 }); // Sort by latest first
    res.render('index', {
        shortUrl: null,
        error: null,
        history,
        port
    });
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});