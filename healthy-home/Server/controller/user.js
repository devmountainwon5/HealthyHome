const express = require('express');
const router = express.Router();
const userService = require('../Services/user')

router.post('/api/login', async (req, res, next) => {
    res.send(await userService.login(req));
})

router.post('/api/register', async (req, res, next) => {
    res.send(await userService.register(req));
})

router.post('/api/logout', (req, res, next) => {
    res.send(userService.logout(req));
})

router.get('/api/me', (req, res, next) => {
    res.send(userService.me(req));
})

module.exports = router;