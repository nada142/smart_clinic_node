const mongoose = require('mongoose');

const ComptabiliteSchema = mongoose.Schema({
    idPatient:  String,
    idSec:String, 
    name:  String, 
    phone:  String, 
    email: String, 
    date:  String,
    total:  String,
    arch: {type:String
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Comptabilite', ComptabiliteSchema);