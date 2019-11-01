var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://msmarca'
const api = apiAdapter(BASE_URL)


module.exports = router