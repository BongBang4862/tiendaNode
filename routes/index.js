const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeControllers')

module.exports = function(){
    router.get('/',homeController.Home);
    router.get('/productos',homeController.Productos);

   

    return router;
};

