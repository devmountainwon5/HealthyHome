const express = require('express');
const router = express.Router();
const sendMail = require('../Services/emails')

router.post('/sendMail', async (req, res, next) => {
    // handle the logic
    let response = await sendMail(req)
    res.send(response)
})

module.exports = router;