const Ordonnance = require('../models/ordonnance.model.js');

// Create and Save a new ordonnance
exports.create = (req, res) => {
    // Validate request
    if(!req.body.date) {
        return res.status(400).send({
            message: "ordonnance content can not be empty"
        });
    }

    // Create a ordonnance
    const ordonnance = new Ordonnance({
        date: req.body.date || "Untitled Ordonnance", 
        idDoctor: req.body.idDoctor,
        idPatient: req.body.idPatient,
        name: req.body.name,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        weight: req.body.weight,
        medication: req.body.medication,
        arch: req.body.arch
    });

    // Save ordonnance in the database
    ordonnance.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the ordonnance."
        });
    });
};

// Retrieve and return all ordonnance from the database.
exports.findAll = (req, res) => {
    Ordonnance.find()
    .then(ordonnances => {
        res.send(ordonnances);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving ordonnances."
        });
    });
};

// Find a single ordonnance with a ordonnanceId
exports.findOne = (req, res) => {
    Ordonnance.findById(req.params.ordonnanceId)
    .then(ordonnance => {
        if(!ordonnance) {
            return res.status(404).send({
                message: "ordonnance not found with id " + req.params.ordonnanceId
            });            
        }
        res.send(ordonnance);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "ordonnance not found with id " + req.params.ordonnanceId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving ordonnance with id " + req.params.ordonnanceId
        });
    });
};

// Update a ordonnance identified by the ordonnanceId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.date) {
        return res.status(400).send({
            message: "ordonnance content can not be empty"
        });
    }

    // Find ordonnance and update it with the request body
    Ordonnance.findByIdAndUpdate(req.params.ordonnanceId, {
        date: req.body.date || "Untitled Ordonnance", 
        idDoctor: req.body.idDoctor,
        idPatient: req.body.idPatient,
        name: req.body.name,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        weight: req.body.weight,
        medication: req.body.medication,
        arch: req.body.arch

    }, {new: true})
    .then(ordonnance => {
        if(!ordonnance) {
            return res.status(404).send({
                message: "ordonnance not found with id " + req.params.ordonnanceId
            });
        }
        res.send(ordonnance);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "ordonnance not found with id " + req.params.ordonnanceId
            });                
        }
        return res.status(500).send({
            message: "Error updating ordonnance with id " + req.params.ordonnanceId
        });
    });
};

// Delete a ordonnance with the specified ordonnanceId in the request
exports.delete = (req, res) => {
    Ordonnance.findByIdAndRemove(req.params.ordonnanceId)
    .then(ordonnance => {
        if(!ordonnance) {
            return res.status(404).send({
                message: "ordonnance not found with id " + req.params.ordonnanceId
            });
        }
        res.send({message: "ordonnance deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "ordonnance not found with id " + req.params.ordonnanceId
            });                
        }
        return res.status(500).send({
            message: "Could not delete ordonnance with id " + req.params.ordonnanceId
        });
    });
};
