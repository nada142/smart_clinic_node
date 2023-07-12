module.exports = (app) => {
    const doctors = require('../controllers/doctor.controller.js');


    app.post('/doctors', doctors.create);

    
    app.get('/doctors', doctors.findAll);

   
    app.get('/doctors/:doctorId', doctors.findOne);

    
    app.put('/doctors/:doctorId', doctors.update);

    
    app.delete('/doctors/:doctorId', doctors.delete);
}
