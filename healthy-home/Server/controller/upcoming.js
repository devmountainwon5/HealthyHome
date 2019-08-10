const express = require('express');
const router = express.Router();
const upcomingService = require('../Services/upcoming')


router.post('/retrieveTasks', async (req, res, next) => {
    res.send(await upcomingService.retrieveUpcomingTasks(req));
})

module.exports = router;