const mongoose = require('mongoose');

const MesureSchema = mongoose.Schema({
    ecg: {
            type: String,           
    },
    temp: {
            type: String,           
    },
    }, {
    timestamps: true
});

module.exports = mongoose.model('Mesure', MesureSchema);