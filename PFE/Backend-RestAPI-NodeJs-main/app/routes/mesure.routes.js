module.exports = (app) => {
    const mesures = require('../controllers/mesure.controller.js');


    app.post('/mesures', mesures.create);

    
    app.get('/mesures', mesures.findAll);

   
    app.get('/mesures/:mesureId', mesures.findOne);

    
    app.put('/mesures/:mesureId', mesures.update);

    
    app.delete('/mesures/:mesureId', mesures.delete);
}
