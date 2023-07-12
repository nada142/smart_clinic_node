const Secretary = require('../models/secretary.model.js');

// Create and Save a new secretary
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "secretary content can not be empty"
        });
    }

    // Create a secretary
    const secretary = new Secretary({
        name:  req.body.name, 
        birthdate:  req.body.birthdate,
        gender:  req.body.gender,
        status:  req.body.status,
        country:  req.body.country,
        city:  req.body.city,
        phone:  req.body.phone,
        bloodtype:  req.body.bloodtype,
        cin:  req.body.cin,
        exp:  req.body.exp,
        email:  req.body.email,
        password:  req.body.password,
        arch: req.body.arch
    });

    // Save secretary in the database
    secretary.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the secretary."
        });
    });
};

// Retrieve and return all secretary from the database.
exports.findAll = (req, res) => {
    Secretary.find()
    .then(secretarys => {
        res.send(secretarys);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving secretarys."
        });
    });
};

// Find a single secretary with a secretaryId
exports.findOne = (req, res) => {
    Secretary.findById(req.params.secretaryId)
    .then(secretary => {
        if(!secretary) {
            return res.status(404).send({
                message: "secretary not found with id " + req.params.secretaryId
            });            
        }
        res.send(secretary);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "secretary not found with id " + req.params.secretaryId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving secretary with id " + req.params.secretaryId
        });
    });
};

// Update a secretary identified by the secretaryId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "secretary content can not be empty"
        });
    }

    // Find secretary and update it with the request body
    Secretary.findByIdAndUpdate(req.params.secretaryId, {
        name:  req.body.name, 
        birthdate:  req.body.birthdate,
        gender:  req.body.gender,
        status:  req.body.status,
        country:  req.body.country,
        city:  req.body.city,
        phone:  req.body.phone,
        bloodtype:  req.body.bloodtype,
        cin:  req.body.cin,
        exp:  req.body.exp,
        email:  req.body.email,
        password:  req.body.password,
        arch: req.body.arch
    }, {new: true})
    .then(secretary => {
        if(!secretary) {
            return res.status(404).send({
                message: "secretary not found with id " + req.params.secretaryId
            });
        }
        res.send(secretary);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "secretary not found with id " + req.params.secretaryId
            });                
        }
        return res.status(500).send({
            message: "Error updating secretary with id " + req.params.secretaryId
        });
    });
};

// Delete a secretary with the specified secretaryId in the request
exports.delete = (req, res) => {
    Secretary.findByIdAndRemove(req.params.secretaryId)
    .then(secretary => {
        if(!secretary) {
            return res.status(404).send({
                message: "secretary not found with id " + req.params.secretaryId
            });
        }
        res.send({message: "secretary deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "secretary not found with id " + req.params.secretaryId
            });                
        }
        return res.status(500).send({
            message: "Could not delete secretary with id " + req.params.secretaryId
        });
    });
};
