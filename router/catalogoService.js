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

async function asyncForEach (arr, callback) {
  for (let i = 0; i < arr.lenght; i++) {
    await callback(arr[i], i, arr)
  }
}

router.get('/categories/:id/brands', isAuth, async (req, res) => {
  var marcas = []
  const { data } = await api.get('/marcas/categoria/' + req.params.id)

  if (data.status == 200) {
    await asyncForEach(data.brands, async (marca_id) => {
      console.log('Consultando marca ' + marca_id)
      const { data2 } = await api2.get('/marcas/' + marca_id)

      if (data2.status == 200) {
        marcas.push(data2.brand)
      }
    })

    res.send({
      status: 200,
      brands: marcas 
    })
  } else {
    res.send(data)
  }
  /*api.get('/marcas/categoria/' + req.params.id).then(async function (resp) {
    if (resp.data.status == 200) {
      var ids = resp.data.brands
      var marcas = []

      await asyncForEach(ids, async (marca_id) => {
        let r = await api2.get('marcas/' + marca_id)
          
        if (r.data.status == 200) {
          marcas.push(r.data.brand)
          console.log('push')
        }
        
      })

      console.log('envio respuesta')
      res.send({
        status: 200,
        brands: marcas
      })
    } else {
      res.send(resp.data)
    }
  })*/
})

router.get('/brands/:id/products', isAuth, (req, res) => {
  api.get('/marcas/' + req.params.id + '/productos').then(resp => {
    res.send(resp.data)
  })
})

module.exports = router