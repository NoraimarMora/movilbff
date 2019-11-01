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
  }).catch(error => {
    res.send(error)
  })
})

router.get('/categories/:id/brands', isAuth, async (req, res) => {
  var marcas = []
  const { data } = await api.get('/marcas/categoria/' + req.params.id)

  if (data.status == 200) {
    const brandResponses = await Promise.all(
      data.brands.map(brand_id => api2.get('/marcas/' + brand_id))
    )

    brandResponses.map(r => marcas.push(r.data.brand))

    res.send({
      status: 200,
      brands: marcas
    })
  } else {
    res.send(data)
  }
}).catch(error => {
  res.send(error)
})

router.get('/brands/:id/products', isAuth, (req, res) => {
  api.get('/marcas/' + req.params.id + '/productos').then(resp => {
    res.send(resp.data)
  }).catch(error => {
    res.send(error)
  })
})

module.exports = router