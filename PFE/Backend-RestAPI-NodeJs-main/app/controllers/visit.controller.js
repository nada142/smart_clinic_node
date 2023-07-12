const Visit = require('../models/visit.model.js');

// Create and Save a new visit
exports.create = (req, res) => {
    // Validate request
    if(!req.body.date) {
        return res.status(400).send({
            message: "visit content can not be empty"
        });
    }

    // Create a visit
    const visit = new Visit({
        date: req.body.date || "Untitled Visit", 
        time : req.body.time,
        idDoctor: req.body.idDoctor,
        idPatient: req.body.idPatient,
        name: req.body.name,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        email: req.body.email,
        observations: req.body.observations,
        arch: req.body.arch
    });

    // Save visit in the database
    visit.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the visit."
        });
    });
};

// Retrieve and return all visit from the database.
exports.findAll = (req, res) => {
    Visit.find()
    .then(visits => {
        res.send(visits);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving visits."
        });
    });
};

// Find a single visit with a visitId
exports.findOne = (req, res) => {
    Visit.findById(req.params.visitId)
    .then(visit => {
        if(!visit) {
            return res.status(404).send({
                message: "visit not found with id " + req.params.visitId
            });            
        }
        res.send(visit);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "visit not found with id " + req.params.visitId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving visit with id " + req.params.visitId
        });
    });
};

// Update a visit identified by the visitId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.date) {
        return res.status(400).send({
            message: "visit content can not be empty"
        });
    }

    // Find visit and update it with the request body
    Visit.findByIdAndUpdate(req.params.visitId, {
        date: req.body.date || "Untitled Visit", 
        time : req.body.time,
        idDoctor: req.body.idDoctor,
        idPatient: req.body.idPatient,
        name: req.body.name,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        email: req.body.email,
        observations: req.body.observations,
        arch: req.body.arch
    }, {new: true})
    .then(visit => {
        if(!visit) {
            return res.status(404).send({
                message: "visit not found with id " + req.params.visitId
            });
        }
        res.send(visit);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "visit not found with id " + req.params.visitId
            });                
        }
        return res.status(500).send({
            message: "Error updating visit with id " + req.params.visitId
        });
    });
};

// Delete a visit with the specified visitId in the request
exports.delete = (req, res) => {
    Visit.findByIdAndRemove(req.params.visitId)
    .then(visit => {
        if(!visit) {
            return res.status(404).send({
                message: "visit not found with id " + req.params.visitId
            });
        }
        res.send({message: "visit deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "visit not found with id " + req.params.visitId
            });                
        }
        return res.status(500).send({
            message: "Could not delete visit with id " + req.params.visitId
        });
    });
};
