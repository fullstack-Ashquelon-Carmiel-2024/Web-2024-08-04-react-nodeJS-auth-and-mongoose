const { Router } = require('express');
const AuthController = require('../services/auth');

const authRouter = new Router();

//authRouter.get('/',AuthController.getUsers);

authRouter.post('/login',AuthController.login);

//authRouter.patch('/:id', AuthController.updatePassword);

// authRouter.put('/:id',AuthController.updateUser);

// authRouter.delete('/:id',AuthController.deleteUser);

module.exports = authRouter;