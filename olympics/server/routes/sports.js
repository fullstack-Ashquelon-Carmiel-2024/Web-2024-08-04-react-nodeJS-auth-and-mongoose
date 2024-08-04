const { Router } = require('express');
const SportController = require('../controller/sports');

const sportRouter = new Router();

sportRouter.get('/',SportController.getSports);

sportRouter.post('/',SportController.createSport);

sportRouter.put('/:id',SportController.updateSport);

sportRouter.delete('/:id',SportController.deleteSport);

module.exports = sportRouter;