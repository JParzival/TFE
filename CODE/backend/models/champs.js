'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChampsSchema = new Schema({

    //no se necesita el identificador porque lo crea mongo

    name: String,
    id: Number
})

module.exports = mongoose.model('champion', ChampsSchema)