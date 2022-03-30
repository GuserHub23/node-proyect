const express = require('express');
const urlValidar = require('../middlewares/urlValidar')
const { leerUrls, agregarUrl, eliminarUrl, editarUrlForm, editarUrl, redireccionamiento } = require('../controllers/homeControllers');
const router = express.Router();

router.get('/', leerUrls);
router.post('/', urlValidar,agregarUrl);
router.get('/eliminar/:id', eliminarUrl);
router.get("/editar/:id", editarUrlForm);
router.post('/editar/:id', urlValidar, editarUrl);
router.get('/:shortUrl', redireccionamiento)

module.exports = router;





