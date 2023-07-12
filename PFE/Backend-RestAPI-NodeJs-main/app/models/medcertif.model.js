const mongoose = require('mongoose');

const MedcertifSchema = mongoose.Schema({
    nbrdays: {
            type: String,           
    },
    from: {
            type: String,           
    },
    to: {
            type: String,           
    },
    idDoctor: String,
    idPatient: String,
    name: String,
    cause: {
            type: String,           
    },
    docname: {
            type: String,           
},
arch: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Medcertif', MedcertifSchema);