const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    receiver: {
        type: String,           
},
sender: {
    type: String,           
},
from: {
    type: String,           
},
    to: {
            type: String,           
    },
    subject: {
            type: String,           
},
    message: {
            type: String,           
},
arch: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Message', MessageSchema);