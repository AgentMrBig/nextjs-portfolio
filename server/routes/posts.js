const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.end('We made it! Its awesome');
})

module.exports = router;