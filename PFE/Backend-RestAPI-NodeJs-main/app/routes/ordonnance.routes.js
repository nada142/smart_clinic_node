module.exports = (app) => {
    const ordonnances = require('../controllers/ordonnance.controller.js');


    app.post('/ordonnances', ordonnances.create);

    
    app.get('/ordonnances', ordonnances.findAll);

   
    app.get('/ordonnances/:ordonnanceId', ordonnances.findOne);

    
    app.put('/ordonnances/:ordonnanceId', ordonnances.update);

    
    app.delete('/ordonnances/:ordonnanceId', ordonnances.delete);
}
