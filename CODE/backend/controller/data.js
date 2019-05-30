'use strict'

const Champ = require("../models/champs")
const Match = require("../models/matches")

function obtenerAllChamps(req, res)
{
    Champ.find({}, { '_id': 0} ).exec((err, listaChamps) => {
        if(err)
        {
            res.status(500).send(
                {
                    message: "500 - Internal server error"
                }
            )
        }
        else
        {
            if(listaChamps)
            {
                res.status(200).send({ listaChamps })
            }
            else
            {
                res.status(404).send(
                    {
                        message: "404 - Champs not found"
                    }
                )
            }
        }
    })
}

function obtenerAllMatches(req, res)
{
    Match.find({}, { "_id":0} ).exec((err, listaMatch) => {
        if(err)
        {
            res.status(500).send(
                {
                    message: "Internal server error"
                }
            )
        }
        else
        {
            if(listaMatch)
            {
                res.status(200).send({ listaMatch })
            }
            else
            {
                res.status(404).send(
                    {
                        message: "404 - Matches not found"
                    }
                )
            }
        }
    })
}

module.exports =
{
    obtenerAllMatches,
    obtenerAllChamps
}