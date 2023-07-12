const { type } = require('express/lib/response');
const Patient = require('../models/patient.model.js');

// Create and Save a new patient
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "patient content can not be empty"
        });
    }

    // Create a patient
    const patient = new Patient({
        name: req.body.name || "Untitled Patient", 
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        cin: req.body.cin,
        adress: req.body.adress,
        job: req.body.job,
        jobadress: req.body.jobadress,
        familystatus: req.body.familystatus,
        livingsituation: req.body.livingsituation,
        height: req.body.height,
        weight: req.body.weight,
        chronicdiseases: req.body.chronicdiseases,
        bloodtype: req.body.bloodtype,
        medicalintolerance: req.body.medicalintolerance,
        foodallergies: req.body.foodallergies,
        habitualconsumption: req.body.habitualconsumption,
        email : req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        arch:req.body.arch
    });

    // Save patient in the database
    patient.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the patient."
        });
    });
};

// Retrieve and return all patient from the database.
exports.findAll = (req, res) => {
    Patient.find()
    .then(patients => {
        res.send(patients);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving patients."
        });
    });
};

// Find a single patient with a patientId
exports.findOne = (req, res) => {
    Patient.findById(req.params.patientId)
    .then(patient => {
        if(!patient) {
            return res.status(404).send({
                message: "patient not found with id " + req.params.patientId
            });            
        }
        res.send(patient);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "patient not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving patient with id " + req.params.patientId
        });
    });
};

// Update a patient identified by the patientId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "patient content can not be empty"
        });
    }

    // Find patient and update it with the request body
    Patient.findByIdAndUpdate(req.params.patientId, {
        name: req.body.name || "Untitled Patient", 
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        cin: req.body.cin,
        adress: req.body.adress,
        job: req.body.job,
        jobadress: req.body.jobadress,
        familystatus: req.body.familystatus,
        livingsituation: req.body.livingsituation,
        height: req.body.height,
        weight: req.body.weight,
        chronicdiseases: req.body.chronicdiseases,
        bloodtype: req.body.bloodtype,
        medicalintolerance: req.body.medicalintolerance,
        foodallergies: req.body.foodallergies,
        habitualconsumption: req.body.habitualconsumption,
        email : req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        arch:req.body.arch
    }, {new: true})
    .then(patient => {
        if(!patient) {
            return res.status(404).send({
                message: "patient not found with id " + req.params.patientId
            });
        }
        res.send(patient);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "patient not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating patient with id " + req.params.patientId
        });
    });
};

// Delete a patient with the specified patientId in the request
exports.delete = (req, res) => {
    Patient.findByIdAndRemove(req.params.patientId)
    .then(patient => {
        if(!patient) {
            return res.status(404).send({
                message: "patient not found with id " + req.params.patientId
            });
        }
        res.send({message: "patient deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "patient not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete patient with id " + req.params.patientId
        });
    });
};
