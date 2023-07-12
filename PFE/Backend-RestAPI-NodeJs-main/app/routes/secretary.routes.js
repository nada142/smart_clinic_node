module.exports = (app) => {
    const secretarys = require('../controllers/secretary.controller.js');


    app.post('/secretarys', secretarys.create);

    
    app.get('/secretarys', secretarys.findAll);

   
    app.get('/secretarys/:secretaryId', secretarys.findOne);

    
    app.put('/secretarys/:secretaryId', secretarys.update);

    
    app.delete('/secretarys/:secretaryId', secretarys.delete);
}
