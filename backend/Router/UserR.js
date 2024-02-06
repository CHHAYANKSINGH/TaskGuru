const express = require('express');
const { login , createaccount} = require('../Controller/UserC');
const userRouter = express.Router();

userRouter.post('/createaccount' , createaccount);
userRouter.post('/login' , login);

module.exports = userRouter;

