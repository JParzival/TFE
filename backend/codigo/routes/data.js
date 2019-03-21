'use strict'

const express = require('express')
const controladorDatos = require('../controller/data')

let api = express.Router()

// api.get para los GET, api.post para los POST

api.get('/data', controladorDatos.obtenerAllData)

module.exports = api