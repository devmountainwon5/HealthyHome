const express = require('express');
const router = express.Router();
const subscriptionService = require('../Services/subscriptions');

router.get('/types', async (req, res, next) => {
    res.send(await subscriptionService.tasksAndTypes(req));
});

module.exports = router;