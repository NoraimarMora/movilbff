var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://mscatalogo'
const api = apiAdapter(BASE_URL)

router.get('/categories', isAuth, (req, res) => {
  api.get('/categorias').then(resp => {
    res.send(resp.data)
  })
})

router.get('/categories/:id/brands', isAuth, (req, res) => {
  api.get('/marcas/categoria/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

router.get('/brands/:id/products', isAuth, (req, res) => {
  api.get('/marcas/' + req.params.id + '/productos').then(resp => {
    res.send(resp.data)
  })
})

module.exports = router