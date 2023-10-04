const express=require('express');
const homeController=require('../controller/homeController');
const usersController = require('../controller/userController');
const passport = require('passport');

const router=express.Router();

router.get('/sign-up' ,usersController.signUp);
router.get('/sign-in' ,usersController.signIn);

router.post('/create' , usersController.create);

router.post('/create-session' , passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
) , usersController.createSession)

router.get('/sign-out' ,usersController.destroySession);

console.log("Users outer loaded");

module.exports=router;