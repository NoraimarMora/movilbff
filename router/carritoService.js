var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://mscarrito'
const api = apiAdapter(BASE_URL)

// Obtener carrito de un cliente
router.get('/clients/:id/cart', isAuth, (req, res) => {
  try {
    api.get('/carritos/cliente/' + req.params.id).then(resp => {
      res.send(resp.data)
    })
  }catch(error) {
    res.send(error)
  }
})

// Crear un carrito
router.post('/carts', isAuth, (req, res) => {
  try {
    api.post('/carritos', req.body).then(resp => {
      res.send(resp.data)
    })
  }catch(error) {
    res.send(error)
  }
})

// Agregar elemento al carrito
router.post('/carts/:id/add', isAuth, (req, res) => {
  try {
    api.post('/carritos/elemento/' + req.params.id, req.body).then(resp => {
      res.send(resp.data)
    })
  }catch(error) {
    res.send(error)
  }
})

// Actualizar el carrito
router.put('/carts/:id', isAuth, (req, res) => {
  try {
    api.put('/carritos/update/' + req.params.id, req.body).then(resp => {
      res.send(resp.data)
    })
  }catch(error) {
    res.send(error)
  }
})

// Eliminar elemento del carrito
router.delete('/carts/:id/delete', isAuth, (req, res) => {
  try {
    api.delete('/carritos/elemento/' + req.params.id, req.body).then(resp => {
      res.send(resp.data)
    })
  }catch(error) {
    res.send(error)
  }
})

// Eliminar carrito (Procesar carrito)
router.delete('/carts/:id', isAuth, (req, res) => {
  try {
    api.delete('/carritos/delete/' + req.params.id).then(resp => {
      res.send(resp.data)
    })
  }catch(error) {
    res.send(error)
  }
})

module.exports = router