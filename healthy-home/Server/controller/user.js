const express = require('express');
const router = express.Router();
const userService = require('../Services/user')

router.post('/login', (req, res, next) => {
    res.send(userService.login(req));
})

router.post('/register', (req, res, next) => {
    res.send(userService.register(req));
})

router.post('/logout', (req, res, next) => {
    res.send(userService.logout(req));
})

router.get('/me', (req, res, next) => {
    res.send(userService.me(req));
})

module.exports = router;