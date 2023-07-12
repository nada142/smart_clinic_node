const Doctor = require('../models/doctor.model.js');

// Create and Save a new doctor
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "doctor content can not be empty"
        });
    }

    // Create a doctor
    const doctor = new Doctor({
        name:  req.body.name, 
        birthdate:  req.body.birthdate,
        gender:  req.body.gender,
        status:  req.body.status,
        country:  req.body.country,
        city:  req.body.city,
        phone:  req.body.phone,
        bloodtype:  req.body.bloodtype,
        cin:  req.body.cin,
        specialty:  req.body.specialty,
        exp:  req.body.exp,
        email:  req.body.email,
        password:  req.body.password,
        rpassword:  req.body.rpassword,
        arch: req.body.arch
    });

    // Save doctor in the database
    doctor.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the doctor."
        });
    });
};

// Retrieve and return all doctor from the database.
exports.findAll = (req, res) => {
    Doctor.find()
    .then(doctors => {
        res.send(doctors);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving doctors."
        });
    });
};

// Find a single doctor with a doctorId
exports.findOne = (req, res) => {
    Doctor.findById(req.params.doctorId)
    .then(doctor => {
        if(!doctor) {
            return res.status(404).send({
                message: "doctor not found with id " + req.params.doctorId
            });            
        }
        res.send(doctor);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "doctor not found with id " + req.params.doctorId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving doctor with id " + req.params.doctorId
        });
    });
};

// Update a doctor identified by the doctorId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "doctor content can not be empty"
        });
    }

    // Find doctor and update it with the request body
    Doctor.findByIdAndUpdate(req.params.doctorId, {
        name:  req.body.name, 
        birthdate:  req.body.birthdate,
        gender:  req.body.gender,
        status:  req.body.status,
        country:  req.body.country,
        city:  req.body.city,
        phone:  req.body.phone,
        bloodtype:  req.body.bloodtype,
        cin:  req.body.cin,
        specialty:  req.body.specialty,
        exp:  req.body.exp,
        email:  req.body.email,
        password:  req.body.password,
        rpassword:  req.body.rpassword,
        arch: req.body.arch
    }, {new: true})
    .then(doctor => {
        if(!doctor) {
            return res.status(404).send({
                message: "doctor not found with id " + req.params.doctorId
            });
        }
        res.send(doctor);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "doctor not found with id " + req.params.doctorId
            });                
        }
        return res.status(500).send({
            message: "Error updating doctor with id " + req.params.doctorId
        });
    });
};

// Delete a doctor with the specified doctorId in the request
exports.delete = (req, res) => {
    Doctor.findByIdAndRemove(req.params.doctorId)
    .then(doctor => {
        if(!doctor) {
            return res.status(404).send({
                message: "doctor not found with id " + req.params.doctorId
            });
        }
        res.send({message: "doctor deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "doctor not found with id " + req.params.doctorId
            });                
        }
        return res.status(500).send({
            message: "Could not delete doctor with id " + req.params.doctorId
        });
    });
};
