const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fname: {
            type: String,     
    },
    lname: {
        type: String,     
},
adress: {
    type: String,     
},
cin: {
    type: String,     
},
    email: {
            type: String,
           
    },
    password:{
        type: String, 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);