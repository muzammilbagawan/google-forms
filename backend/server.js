const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors( {origin: 'http://localhost:3000'} ));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formData');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Model
const FormData = require('./models/FormData');

// Routes
app.post('/submit', async (req, res) => {
    try {
        const formData = new FormData(req.body);
        console.log(formData);
        await formData.save();
        res.status(201).send('Form submitted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
