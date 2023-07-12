const Rdv = require('../models/rdv.model.js');

// Create and Save a new rdv
exports.create = (req, res) => {
    // Validate request
    if(!req.body.date) {
        return res.status(400).send({
            message: "rdv content can not be empty"
        });
    }

    // Create a rdv
    const rdv = new Rdv({
        idPat:req.body.idPat,
        idSec:req.body.idSec,
        name: req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        date: req.body.date || "Untitled Rdv", 
        time : req.body.time,
        idDoc :req.body.idDoc,
        reason: req.body.reason,
        status: req.body.status,
        arch: req.body.arch
    });

    // Save rdv in the database
    rdv.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the rdv."
        });
    });
};

// Retrieve and return all rdv from the database.
exports.findAll = (req, res) => {
    Rdv.find()
    .then(rdvs => {
        res.send(rdvs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving rdvs."
        });
    });
};

// Find a single rdv with a rdvId
exports.findOne = (req, res) => {
    Rdv.findById(req.params.rdvId)
    .then(rdv => {
        if(!rdv) {
            return res.status(404).send({
                message: "rdv not found with id " + req.params.rdvId
            });            
        }
        res.send(rdv);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "rdv not found with id " + req.params.rdvId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving rdv with id " + req.params.rdvId
        });
    });
};

// Update a rdv identified by the rdvId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.date) {
        return res.status(400).send({
            message: "rdv content can not be empty"
        });
    }

    // Find rdv and update it with the request body
    Rdv.findByIdAndUpdate(req.params.rdvId, {
        idPat:req.body.idPat,
        idSec:req.body.idSec,
        name: req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        date: req.body.date || "Untitled Rdv", 
        time : req.body.time,
        idDoc :req.body.idDoc,
        reason: req.body.reason,
        status: req.body.status,
        arch: req.body.arch
    }, {new: true})
    .then(rdv => {
        if(!rdv) {
            return res.status(404).send({
                message: "rdv not found with id " + req.params.rdvId
            });
        }
        res.send(rdv);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "rdv not found with id " + req.params.rdvId
            });                
        }
        return res.status(500).send({
            message: "Error updating rdv with id " + req.params.rdvId
        });
    });
};

// Delete a rdv with the specified rdvId in the request
exports.delete = (req, res) => {
    Rdv.findByIdAndRemove(req.params.rdvId)
    .then(rdv => {
        if(!rdv) {
            return res.status(404).send({
                message: "rdv not found with id " + req.params.rdvId
            });
        }
        res.send({message: "rdv deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "rdv not found with id " + req.params.rdvId
            });                
        }
        return res.status(500).send({
            message: "Could not delete rdv with id " + req.params.rdvId
        });
    });
};
