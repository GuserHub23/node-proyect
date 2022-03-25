const express = require('express');
const router = express.Router();

// ruta del login
router.get("/login", (req, res) => {
    res.render('login');
});

module.exports = router