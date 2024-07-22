const express = require('express');
const router = express.Router();

module.exports = function(){
    router.get('/',(req,res)=>{
        res.send('Home');
    });

    router.get('/productos',(req,res)=>{
        res.send('productos');
    });

    return router;
};

