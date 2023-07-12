const Mesure = require('../models/mesure.model.js');

// Create and Save a new mesure
exports.create = (req, res) => {
    // Validate request
    if(!req.body.ecg) {
        return res.status(400).send({
            message: "mesure content can not be empty"
        });
    }

    // Create a mesure
    const mesure = new Mesure({
        ecg: req.body.ecg || "Untitled Mesure", 
        temp : req.body.temp,
        
    });

    // Save mesure in the database
    mesure.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the mesure."
        });
    });
};

// Retrieve and return all mesure from the database.
exports.findAll = (req, res) => {
    Mesure.find()
    .then(mesures => {
        res.send(mesures);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving mesures."
        });
    });
};

// Find a single mesure with a mesureId
exports.findOne = (req, res) => {
    Mesure.findById(req.params.mesureId)
    .then(mesure => {
        if(!mesure) {
            return res.status(404).send({
                message: "mesure not found with id " + req.params.mesureId
            });            
        }
        res.send(mesure);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "mesure not found with id " + req.params.mesureId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving mesure with id " + req.params.mesureId
        });
    });
};

// Update a mesure identified by the mesureId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.ecg) {
        return res.status(400).send({
            message: "mesure content can not be empty"
        });
    }

    // Find mesure and update it with the request body
    Mesure.findByIdAndUpdate(req.params.mesureId, {
        ecg: req.body.ecg || "Untitled Mesure", 
        temp : req.body.temp
    
    }, {new: true})
    .then(mesure => {
        if(!mesure) {
            return res.status(404).send({
                message: "mesure not found with id " + req.params.mesureId
            });
        }
        res.send(mesure);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "mesure not found with id " + req.params.mesureId
            });                
        }
        return res.status(500).send({
            message: "Error updating mesure with id " + req.params.mesureId
        });
    });
};

// Delete a mesure with the specified mesureId in the request
exports.delete = (req, res) => {
    Mesure.findByIdAndRemove(req.params.mesureId)
    .then(mesure => {
        if(!mesure) {
            return res.status(404).send({
                message: "mesure not found with id " + req.params.mesureId
            });
        }
        res.send({message: "mesure deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "mesure not found with id " + req.params.mesureId
            });                
        }
        return res.status(500).send({
            message: "Could not delete mesure with id " + req.params.mesureId
        });
    });
};
