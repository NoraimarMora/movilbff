    
var express = require('express');
var router = express.Router()

// Cargar archivos de rutas
var carritoRouter = require('./carritoService')
var catalogoRouter = require('./catalogoService')
var marcaRouter = require('./marcaService')
var ordenRouter = require('./ordenService')
var usuarioRouter = require('./usuarioService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

// Rutas
router.use(carritoRouter)
router.use(catalogoRouter)
router.use(marcaRouter)
router.use(ordenRouter)
router.use(usuarioRouter)

module.exports = router