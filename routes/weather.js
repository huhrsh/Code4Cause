const express=require('express');

const router=express.Router();

const weatherController=require('../controller/weatherController');

router.get('/',weatherController.home);

module.exports=router;