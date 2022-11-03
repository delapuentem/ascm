const { Router } = require('express')
const router = Router()

// Conexion mariadb
const pool = require('../../config/mariadb')

//Node Cache
// https://dev.to/nahuelsegovia/almacenar-datos-en-cache-con-expressjs-283h
const NodeCache = require('node-cache')
const municipiosCache = new NodeCache({stdTTL: 120}) // Tiempo duracion de cache en segundos
const countMunicipiosCache = new NodeCache({stdTTL: 120}) 


router.get('/municipios', async function(request, response){
    if (municipiosCache.has('rows')){
        response.json(municipiosCache.get('rows'))
        //console.log('Municipios enviados desde la cache')
    }

    else{
        let connection
        try{
            connection = await pool.getConnection()
            const rows = await connection.query('select * from ascmMunicipios order by municipio asc')
            // Seteamos los datos en cache
            municipiosCache.set('rows', rows)

            response.json(rows)
            //console.log('Municipios enviados desde base de datos')
        }
        catch(error){
            console.log(error)
        }        
        finally {
            if (connection) connection.end()
        }        

    }

})


router.get('/countMunicipios', async function(request, response){
    if (countMunicipiosCache.has('rows')){
        response.json(countMunicipiosCache.get('rows'))
    }

    else {
        let connection
        try{
            connection = await pool.getConnection()
            const rows = await connection.query('select count(municipio) as total from ascmMunicipios')
            countMunicipiosCache.set('rows', {'total': rows[0].total.toString()})
            response.json({'total': rows[0].total.toString()})
        }
        catch(error){
            response.send(error)
        }
        finally {
            if (connection) connection.end()
        }        
    }

})

module.exports = router