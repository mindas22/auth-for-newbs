const express = require('express');
const Joi = require('@hapi/joi');

const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});

// any route in here pre-pended wth /auth

router.get('/', (req, res) => {
    res.json({
        message: 'labas rytas'
    });
});

router.post('/signup', function (req, res) {
    console.log('body', req.body);
    const result = Joi.validate(req.body, schema);
    res.json({result})
})

module.exports = router;