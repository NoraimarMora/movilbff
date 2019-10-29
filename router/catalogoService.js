var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://mscatalogo'
const api = apiAdapter(BASE_URL)
const api2 = apiAdapter('http://msmarcas')

router.get('/categories', isAuth, (req, res) => {
  api.get('/categorias').then(resp => {
    res.send(resp.data)
  })
})

router.get('/categories/:id/brands', isAuth, (req, res) => {
  api.get('/marcas/categoria/' + req.params.id).then(resp => {
    if (resp.data.status == 200) {
      var ids = resp.data.brands
      var marcas = []

      ids.forEach((marca_id) => {
        api2.get('marcas/' + marca_id).then(r => {
          if (r.data.status == 200) {
            marcas.push(r.data.brand)
            console.log('push')
          }
        })
      })

      console.log('envio respuesta')
      res.send({
        status: 200,
        brands: marcas
      })
    } else {
      res.send(resp.data)
    }
  })
})

router.get('/brands/:id/products', isAuth, (req, res) => {
  api.get('/marcas/' + req.params.id + '/productos').then(resp => {
    res.send(resp.data)
  })
})

module.exports = router