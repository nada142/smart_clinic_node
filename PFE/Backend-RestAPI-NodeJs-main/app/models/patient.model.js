const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    name: {
        type: String,           
    },
    birthdate: {
        type: String,           
},
    gender: {
        type: String,           
},
cin: {
    type: String,           
},
    adress: {
        type: String,           
},
    job: {
        type: String,           
},
    jobadress: {
        type: String,           
},
    familystatus: {
        type: String,           
},
livingsituation: {
    type: String,           
},
    height: {
        type: String,           
},
    weight: {
        type: String,           
},
    chronicdiseases: {
        type: String,           
},
    bloodtype: {
        type: String,           
},
medicalintolerance: {
    type: String,           
},
foodallergies: {
    type: String,           
},
habitualconsumption: {
    type: String,           
},
    email: {
        type: String,           
    },
    phone: {
        type: String,           
},
password: {
    type: String,           
},
arch: {type:String
},
},
 {
    timestamps: true
});

module.exports = mongoose.model('Patient', PatientSchema);