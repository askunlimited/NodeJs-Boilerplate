const mongoose = require('mongoose');

const ApplicationScehma = new mongoose.Schema ({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Application = mongoose.model('Application', UserScehma);

module.exports = Application;