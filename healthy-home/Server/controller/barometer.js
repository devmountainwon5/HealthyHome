const express = require('express');
const router = express.Router();
const barometerService = require('../Services/barometer')


router.get('/retrieveScore', async (req, res, next) => {
    res.send(await barometerService.retrieveScore(req));
})

module.exports = router;