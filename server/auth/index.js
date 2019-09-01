const express = require('express');

const router = express.Router();

// any route in here pre-pended wth /auth

router.get('/', (req, res) => {
    res.json({
        message: 'labas rytas'
    });
});

router.post('/signup', (req, res) => {
    console.log('body', req.hostname);
    res.json({
        message: 'post'
    })
})

module.exports = router;