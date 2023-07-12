module.exports = (app) => {
    const medcertifs = require('../controllers/medcertif.controller.js');


    app.post('/medcertifs', medcertifs.create);

    
    app.get('/medcertifs', medcertifs.findAll);

   
    app.get('/medcertifs/:medcertifId', medcertifs.findOne);

    
    app.put('/medcertifs/:medcertifId', medcertifs.update);

    
    app.delete('/medcertifs/:medcertifId', medcertifs.delete);
}
