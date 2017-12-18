const express = require('express');
const router = express.Router();
const query = require('../db/queries')

router.get('/', (req, res) => {
    const data = {
        title: 'Cookie Warmup',
        summary: 'SECRET COOKIES',
        nomnom: 'nom nom nom'

    };
    if(req.session.count >= 1){
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    console.log(req.session.count)
    console.log(req.session);
    req.session.favoriteDog = 'The Griff Dog';
    res.render('index', data)
})

module.exports = router;