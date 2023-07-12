module.exports = (app) => {
    const visits = require('../controllers/visit.controller.js');


    app.post('/visits', visits.create);

    
    app.get('/visits', visits.findAll);

   
    app.get('/visits/:visitId', visits.findOne);

    
    app.put('/visits/:visitId', visits.update);

    
    app.delete('/visits/:visitId', visits.delete);
}
