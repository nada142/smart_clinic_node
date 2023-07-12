module.exports = (app) => {
    const patients = require('../controllers/patient.controller.js');


    app.post('/patients', patients.create);

    
    app.get('/patients', patients.findAll);

   
    app.get('/patients/:patientId', patients.findOne);

    
    app.put('/patients/:patientId', patients.update);

    
    app.delete('/patients/:patientId', patients.delete);
}
