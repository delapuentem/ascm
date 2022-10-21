const { Router } = require('express')
const router = Router()

// Conexion mariadb
const pool = require('../../config/mariadb')

//Node Cache
// https://dev.to/nahuelsegovia/almacenar-datos-en-cache-con-expressjs-283h
const NodeCache = require('node-cache')
const municipiosCache = new NodeCache({stdTTL: 120}) // Tiempo duracion de cache en segundos


router.get('/municipios', async function(request, response){
    if (municipiosCache.has('rows')){
        response.json(municipiosCache.get('rows'))
        console.log('Municipios enviados desde la cache')
    }

    else{
        let connection
        try{
            connection = await pool.getConnection()
            const rows = await connection.query('select * from ascmMunicipios')
            // Seteamos los datos en cache
            municipiosCache.set('rows', rows)

            response.json(rows)
            console.log('Municipios enviados desde base de datos')
        }
        catch(error){
            console.log(error)
        }        

    }

})

module.exports = router