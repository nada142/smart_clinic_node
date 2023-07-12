const mongoose = require('mongoose');

const VisitSchema = mongoose.Schema({
    date: {
            type: String,           
    },
    time: {
            type: String,           
    },
    idDoctor: String,
    idPatient: String,
    name: String,
    birthdate: String,
    gender: String,
    email: String,
 
    observations: {
            type: String,           
},
arch: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Visit', VisitSchema);