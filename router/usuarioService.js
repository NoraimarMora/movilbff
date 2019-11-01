var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');
const services = require('../services');

const BASE_URL = 'http://msusuarios'
const api = apiAdapter(BASE_URL)

// Direcciones de un cliente
router.get('/clients/:id/addresses', isAuth, (req, res) => {
  try {
    api.get('/direcciones/cliente/' + req.params.id).then(resp => {
      res.send(resp.data)
    })
  } catch (error){
    res.send(error)
  }
})

// Info. de un cliente
router.get('/clients/:id', isAuth, (req, res) => {
  try {
    api.get('/clientes/' + req.params.id).then(resp => {
      res.send(resp.data)
    })
  } catch(error) {
    res.send(error)
  }
})

// Login
router.post('/login', (req, res) => {
  try {
    api.post('/clientes/login-email', req.body).then(resp => {
      if (resp.data.status == 200) {
        var token = services.createToken({
          id: resp.data.client.id, 
          email: resp.data.client.email
        })

        res.send({
          status: resp.data.status,
          token: token,
          client: resp.data.client
        })
      } else {
        res.send(resp.data)
      }
    })
  } catch(error) {
    res.send(error)
  }
})

// Crear una direccion
router.post('/clients/:id/addresses', isAuth, (req, res) => {
  try {
    api.post('/direcciones/', req.body).then(resp => {
      res.send(resp.data)
    })
  }catch(error) {
    res.send(error)
  }
})

// Actualizar info. de un cliente
router.put('/clients/:id', isAuth, (req, res) => {
  try{
    api.put('/clientes/update/' + req.params.id, req.body).then(resp => {
      res.send(resp.data)
    })
  } catch(error) {
    res.send(error)
  }
})

module.exports = router