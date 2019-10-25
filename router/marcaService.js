var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://msmarca'
const api = apiAdapter(BASE_URL)

/*
router.get('/feeds', isAuth, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/feeds/:hashtag', isAuth, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.post('/feeds', isAuth, (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})
*/

module.exports = router