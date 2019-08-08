const express = require('express');
const router = express.Router();
const questionsService = require('../Services/question')

router.get('/retrieveAll', async (req, res, next) => {
    res.send(await questionsService.retrieveAll(req));
})



module.exports = router;