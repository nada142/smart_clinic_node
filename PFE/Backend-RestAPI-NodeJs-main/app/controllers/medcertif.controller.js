const Medcertif = require('../models/medcertif.model.js');

// Create and Save a new medcertif
exports.create = (req, res) => {
    // Validate request
    if(!req.body.nbrdays) {
        return res.status(400).send({
            message: "medcertif content can not be empty"
        });
    }

    // Create a medcertif
    const medcertif = new Medcertif({
        nbrdays: req.body.nbrdays || "Untitled Medcertif", 
        from : req.body.from,
        to: req.body.to,
        idDoctor: req.body.idDoctor,
        idPatient: req.body.idPatient,
        name: req.body.name,
        cause: req.body.cause,
        docname: req.body.docname,
        arch: req.body.arch
    });

    // Save medcertif in the database
    medcertif.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the medcertif."
        });
    });
};

// Retrieve and return all medcertif from the database.
exports.findAll = (req, res) => {
    Medcertif.find()
    .then(medcertifs => {
        res.send(medcertifs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving medcertifs."
        });
    });
};

// Find a single medcertif with a medcertifId
exports.findOne = (req, res) => {
    Medcertif.findById(req.params.medcertifId)
    .then(medcertif => {
        if(!medcertif) {
            return res.status(404).send({
                message: "medcertif not found with id " + req.params.medcertifId
            });            
        }
        res.send(medcertif);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "medcertif not found with id " + req.params.medcertifId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving medcertif with id " + req.params.medcertifId
        });
    });
};

// Update a medcertif identified by the medcertifId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.nbrdays) {
        return res.status(400).send({
            message: "medcertif content can not be empty"
        });
    }

    // Find medcertif and update it with the request body
    Medcertif.findByIdAndUpdate(req.params.medcertifId, {
        nbrdays: req.body.nbrdays || "Untitled Medcertif", 
        from : req.body.from,
        to: req.body.to,
        idDoctor: req.body.idDoctor,
        idPatient: req.body.idPatient,
        name: req.body.name,
        cause: req.body.cause,
        docname: req.body.docname,
        arch: req.body.arch
    }, {new: true})
    .then(medcertif => {
        if(!medcertif) {
            return res.status(404).send({
                message: "medcertif not found with id " + req.params.medcertifId
            });
        }
        res.send(medcertif);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "medcertif not found with id " + req.params.medcertifId
            });                
        }
        return res.status(500).send({
            message: "Error updating medcertif with id " + req.params.medcertifId
        });
    });
};

// Delete a medcertif with the specified medcertifId in the request
exports.delete = (req, res) => {
    Medcertif.findByIdAndRemove(req.params.medcertifId)
    .then(medcertif => {
        if(!medcertif) {
            return res.status(404).send({
                message: "medcertif not found with id " + req.params.medcertifId
            });
        }
        res.send({message: "medcertif deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "medcertif not found with id " + req.params.medcertifId
            });                
        }
        return res.status(500).send({
            message: "Could not delete medcertif with id " + req.params.medcertifId
        });
    });
};
