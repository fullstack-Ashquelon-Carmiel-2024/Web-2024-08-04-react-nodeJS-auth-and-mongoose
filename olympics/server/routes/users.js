const { Router } = require('express');
const UserController = require('../controller/users');

const userRouter = new Router();

userRouter.get('/',UserController.getUsers);

userRouter.post('/',UserController.createUser);

userRouter.patch('/:id', UserController.updatePassword);

// userRouter.put('/:id',UserController.updateUser);

// userRouter.delete('/:id',UserController.deleteUser);

module.exports = userRouter;