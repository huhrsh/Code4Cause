const express=require('express');
const homeController=require('../controller/homeController');

const router=express.Router();

console.log("Router loaded");

router.get('/',homeController.home)

router.use('/users',require('./users'));
router.use('/weather',require('./weather'));

module.exports=router;