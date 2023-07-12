const mongoose = require('mongoose');

const RdvSchema = mongoose.Schema({
idPat: String,
idSec:String,
name: String,
email: String,
phone: String,
    date: {
            type:String,           
    },
    time: {
            type: String,           
    },

idDoc: String,


reason: {
    type: String,           
},
status: String,

    arch: {type:String
},}, {
    timestamps: true
});

module.exports = mongoose.model('Rdv', RdvSchema);