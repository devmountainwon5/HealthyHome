const express = require('express');
const router = express.Router();
const todoService = require('../Services/todo')

router.get('/suggested', async (req, res, next) => {
    res.send(await todoService.getSuggested(req));
})

router.get('/user', async (req, res, next) => {
    res.send(await todoService.getUserTodos(req));
})

router.post('/adduser', async (req, res, next) => {
    res.send(await todoService.addUserTodos(req));
})
router.delete('/removeuser/:todo_id', async (req, res, next) => {
    res.send(await todoService.romoveUserTodo(req));
})
router.post('/completeuser', async (req, res, next) => {
    res.send(await todoService.completeUserTodo(req));
})

module.exports = router;