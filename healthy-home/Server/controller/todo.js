const express = require('express');
const router = express.Router();
const todoService = require('../Services/todo')

router.get('/suggested', async (req, res, next) => {
    res.send(await todoService.getSuggested(req));
})

router.get('/user', async (req, res, next) => {
    res.send(await todoService.getUserTodos(req));
})

module.exports = router;