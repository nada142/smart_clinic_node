const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    name :String,
        birthdate :String,
        gender :String,
        status :String,
        country :String,
        city :String,
        phone :String,
        bloodtype: String,
        cin :String,
        specialty : String,
        exp: String, 
        email: String, 
        password: String,
        rpassword: String,  
    arch: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Doctor', DoctorSchema);