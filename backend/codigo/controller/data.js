'use strict'

function obtenerAllData(req, res)
{
    res.status(200).send(
        {
            mensaje:'Devolviendo todos los datos'
        }
    )
}

module.exports =
{
    obtenerAllData
}