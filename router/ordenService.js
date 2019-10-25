var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://msordenes'
const api = apiAdapter(BASE_URL)


router.get('/clients/:id/orders', isAuth, (req, res) => {
  api.get('/ordenes/cliente/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

router.get('/orders/:id', isAuth, (req, res) => {
  api.get('/ordenes/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router