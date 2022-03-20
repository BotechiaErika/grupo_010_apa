const mainController = require('../controllers/mainController.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION MAIN  */
router.get('/', mainController.indexPage)
router.get('/home', mainController.landingUser)
router.get('/buscar', mainController.buscar)
router.get('/productos', mainController.landingProducts)
router.get('/usuarios', mainController.iniciarU)
router.get('/empresas', mainController.iniciarE)

module.exports = router;