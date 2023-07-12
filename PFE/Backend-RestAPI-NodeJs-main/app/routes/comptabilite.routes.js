module.exports = (app) => {
    const comptabilites = require('../controllers/comptabilite.controller.js');


    app.post('/comptabilites', comptabilites.create);

    
    app.get('/comptabilites', comptabilites.findAll);

   
    app.get('/comptabilites/:comptabiliteId', comptabilites.findOne);

    
    app.put('/comptabilites/:comptabiliteId', comptabilites.update);

    
    app.delete('/comptabilites/:comptabiliteId', comptabilites.delete);
}
