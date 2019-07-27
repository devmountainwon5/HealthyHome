const express = require('express');
const router = express.Router();
const tipsService = require('../Services/tips')

router.get('/retrieveAll', async (req, res, next) => {
    res.send(await tipsService.retrieveAll(req));
})


module.exports = router;