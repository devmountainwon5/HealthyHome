const express = require('express');
const router = express.Router();
const barometerService = require('../Services/barometer')


router.post('/retrieveScore', async (req, res, next) => {
    let response = await barometerService.retrieveScore(req)
    res.send(response);
})

module.exports = router;