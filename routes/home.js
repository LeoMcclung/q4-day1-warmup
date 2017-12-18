const express = require('express');
const router = express.Router();
const query = require('../db/queries')

router.get('/', (req, res) => {
    const data = {
        title: 'Cookie Warmup',
        summary: 'SECRET COOKIES',
        nomnom: 'nom nom nom'

    };
    req.session.favoriteDog = 'The Griff Dog';
    res.render('index', data)
})

module.exports = router;