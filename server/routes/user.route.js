const { createUser, getAllUser, updateUser, deleteUser } = require('../controllers/user.controller');

const userRouter = require('express').Router();

userRouter.get('/', getAllUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;