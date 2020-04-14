const mongoose = require('mongoose');

const UserScehma = new mongoose.Schema ({
    fsname: {
        type: String,
        required: true
    },
    mdname: {
        type: String,
        required: true
    },
    lsname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Apply = mongoose.model('Apply', UserScehma);

module.exports = Apply;