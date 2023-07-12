const Comptabilite = require('../models/comptabilite.model.js');

// Create and Save a new comptabilite
exports.create = (req, res) => {
    // Validate request
    if(!req.body.total) {
        return res.status(400).send({
            message: "comptabilite content can not be empty"
        });
    }

    // Create a comptabilite
    const comptabilite = new Comptabilite({
        idPatient:  req.body.idPatient, 
        idSec:req.body.idSec,
        name: req.body.name, 
        phone:  req.body.phone, 
        email:  req.body.email, 
        date:  req.body.date,
        total:  req.body.total,
        arch: req.body.arch

    });

    // Save comptabilite in the database
    comptabilite.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the comptabilite."
        });
    });
};

// Retrieve and return all comptabilite from the database.
exports.findAll = (req, res) => {
    Comptabilite.find()
    .then(comptabilites => {
        res.send(comptabilites);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving comptabilites."
        });
    });
};

// Find a single comptabilite with a comptabiliteId
exports.findOne = (req, res) => {
    Comptabilite.findById(req.params.comptabiliteId)
    .then(comptabilite => {
        if(!comptabilite) {
            return res.status(404).send({
                message: "comptabilite not found with id " + req.params.comptabiliteId
            });            
        }
        res.send(comptabilite);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "comptabilite not found with id " + req.params.comptabiliteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving comptabilite with id " + req.params.comptabiliteId
        });
    });
};

// Update a comptabilite identified by the comptabiliteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.total) {
        return res.status(400).send({
            message: "comptabilite content can not be empty"
        });
    }

    // Find comptabilite and update it with the request body
    Comptabilite.findByIdAndUpdate(req.params.comptabiliteId, {
        idPatient:  req.body.idPatient, 
        idSec:req.body.idSec,
        name: req.body.name, 
        phone:  req.body.phone, 
        email:  req.body.email, 
        date:  req.body.date,
        total:  req.body.total,
        arch: req.body.arch
    }, {new: true})
    .then(comptabilite => {
        if(!comptabilite) {
            return res.status(404).send({
                message: "comptabilite not found with id " + req.params.comptabiliteId
            });
        }
        res.send(comptabilite);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "comptabilite not found with id " + req.params.comptabiliteId
            });                
        }
        return res.status(500).send({
            message: "Error updating comptabilite with id " + req.params.comptabiliteId
        });
    });
};

// Delete a comptabilite with the specified comptabiliteId in the request
exports.delete = (req, res) => {
    Comptabilite.findByIdAndRemove(req.params.comptabiliteId)
    .then(comptabilite => {
        if(!comptabilite) {
            return res.status(404).send({
                message: "comptabilite not found with id " + req.params.comptabiliteId
            });
        }
        res.send({message: "comptabilite deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "comptabilite not found with id " + req.params.comptabiliteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete comptabilite with id " + req.params.comptabiliteId
        });
    });
};
