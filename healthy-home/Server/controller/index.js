const express = require('express');
const router = express.Router();

const userServices = require('../Services/user') 

//login endpoint
router.post('/login', (req, res, next)=> {
    res.send(userServices.login(req))
})

//register endpoint
router.post('/register', (req, res, next) =>{
    res.send(userServices.register(req))
})

//logout endpoint 
router.post('/logout', (req, res. next) => {
    res.send(userServices.logout(req))
})
