module.exports = (app) => {
    const rdvs = require('../controllers/rdv.controller.js');


    app.post('/rdvs', rdvs.create);

    
    app.get('/rdvs', rdvs.findAll);

   
    app.get('/rdvs/:rdvId', rdvs.findOne);

    
    app.put('/rdvs/:rdvId', rdvs.update);

    
    app.delete('/rdvs/:rdvId', rdvs.delete);
}
