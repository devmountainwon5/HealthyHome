const express = require('express');
const router = express.Router();
const userService = require('../Services/emails')

router.post('/sendMail', async (req, res, next) => {
    res.send(await emailsService.sendMail(req));
})

module.exports = router;