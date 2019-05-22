'use strict'

const server = require('./server')
const port = process.env.port || 9797
const servidor = server.listen(port, () => 
    {
        console.log(`Servidor escuchando en ${servidor.address().port}`)
    }
    
)