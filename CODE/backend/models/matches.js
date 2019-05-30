'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatchesSchema = new Schema({

    //no se necesita el identificador porque lo crea mongo

    gameId: Number,
    creationTime: Number,
    gameDuration: Number,
    seasonId: Number,
    winner: Number,
    firstBlood: Number,
    firstTower: Number,
    firstInhibitor: Number,
    firstBaron: Number,
    firstDragon: Number,
    firstRiftHerald: Number,

    t1_champ1id: Number,
    t1_champ1_sum1: Number,
    t1_champ1_sum2: Number,
    t1_champ2id: Number,
    t1_champ2id_sum1: Number,
    t1_champ2id_sum2: Number,
    t1_champ3id: Number,
    t1_champ3id_sum1: Number,
    t1_champ3id_sum2: Number,
    t1_champ4id: Number,
    t1_champ4id_sum1: Number,
    t1_champ4id_sum2: Number,
    t1_champ5id: Number,
    t1_champ5id_sum1: Number,
    t1_champ5id_sum2: Number,
    t1_towerKills: Number,
    t1_inhibitorKills: Number,
    t1_baronKills: Number,
    t1_dragonKills: Number,
    t1_riftHeraldKills: Number,
    t1_ban1: Number,
    t1_ban2: Number,
    t1_ban3: Number,
    t1_ban4: Number,
    t1_ban5: Number,

    t2_champ1id: Number,
    t2_champ1_sum1: Number,
    t2_champ1_sum2: Number,
    t2_champ2id: Number,
    t2_champ2id_sum1: Number,
    t2_champ2id_sum2: Number,
    t2_champ3id: Number,
    t2_champ3id_sum1: Number,
    t2_champ3id_sum2: Number,
    t2_champ4id: Number,
    t2_champ4id_sum1: Number,
    t2_champ4id_sum2: Number,
    t2_champ5id: Number,
    t2_champ5id_sum1: Number,
    t2_champ5id_sum2: Number,
    t2_towerKills: Number,
    t2_inhibitorKills: Number,
    t2_baronKills: Number,
    t2_dragonKills: Number,
    t2_riftHeraldKills: Number,
    t2_ban1: Number,
    t2_ban2: Number,
    t2_ban3: Number,
    t2_ban4: Number,
    t2_ban5: Number

})

module.exports = mongoose.model('game', MatchesSchema)