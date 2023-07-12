const mongoose = require('mongoose');

const OrdonnanceSchema = mongoose.Schema({
    date: {
            type: String,           
    },
    idDoctor: String,
    idPatient: String,
    name: String,
    birthdate: String,
    gender: String,
    weight: String,
    medication: {
            type: String,           
    },
arch: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Ordonnance', OrdonnanceSchema);