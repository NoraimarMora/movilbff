var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://mscarrito'
const api = apiAdapter(BASE_URL)

// Obtener carrito de un cliente
router.get('/clients/:id/cart', isAuth, (req, res) => {
  api.get('/carritos/cliente/' + req.params.id).then(resp => {
    res.send(resp.data)
  }).catch(
    res.send({
      status: 404
    })
  );
})

// Crear un carrito
router.post('/carts', isAuth, (req, res) => {
  api.post('/carritos', req.body).then(resp => {
    res.send(resp.data)
  })
})

// Agregar elemento al carrito
router.post('/carts/:id/add', isAuth, (req, res) => {
  api.post('/carritos/elemento/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  }).catch(
    res.send({
      status: 404
    })
  );
})

// Actualizar el carrito
router.put('/carts/:id', isAuth, (req, res) => {
  api.put('/carritos/update/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  }).catch(
    res.send({
      status: 404
    })
  );
})

// Eliminar elemento del carrito
router.delete('/carts/:id/delete', isAuth, (req, res) => {
  api.delete('/carritos/elemento/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  }).catch(
    res.send({
      status: 404
    })
  );
})

// Eliminar carrito (Procesar carrito)
router.get('/carts', isAuth, (req, res) => {
  api.get('/carritos').then(resp => {
    res.send(resp.data)
  })
})

module.exports = router