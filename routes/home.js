const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    const urls = [
        {
            origin: "www.google.com/bluuweb",
            shortUrl: "faass"
        },
        {
            origin: "www.josefaslisnta.com",
            shortUrl: "faass"
        },
        {
            origin: "www.facebook.com",
            shortUrl: "faass"
        },
    ]
    res.render('home', {urls: urls});
})


module.exports = router





