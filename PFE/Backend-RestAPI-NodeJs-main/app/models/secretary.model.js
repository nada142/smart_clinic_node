const mongoose = require('mongoose');

const SecretarySchema = mongoose.Schema({
    name :String,
    birthdate :String,
    gender :String,
    status :String,
    country :String,
    city :String,
    phone :String,
    bloodtype: String,
    cin :String,
    exp: String, 
    email: String, 
    password: String, 
arch: String
}, {
timestamps: true
});

module.exports = mongoose.model('Secretary', SecretarySchema);