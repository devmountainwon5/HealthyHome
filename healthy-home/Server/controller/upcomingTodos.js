const express = require('express');
const router = express.Router();
const upcomingService = require('../Services/upcomingTodos');

router.post('/user', async (req, res, next) => {
    let response = await upcomingService.getUpcomingTodos(req)
    res.send(response)
})

module.exports = router;