const express = require('express');
const router = express.Router();
const questionsService = require('../Services/question')

router.get('/retrieveAll', async (req, res, next) => {
    res.send(await questionsService.retrieveAll(req));
})

router.post('/submit',async (req, res, next) => {
    res.send(await questionsService.submit(req));
})

module.exports = router;