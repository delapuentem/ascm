const { Router } = require('express')
const router = Router()

// Conexion mariadb
const pool = require('../../config/mariadb')

//Node Cache
// https://dev.to/nahuelsegovia/almacenar-datos-en-cache-con-expressjs-283h
const NodeCache = require('node-cache')
const countArbolesCache = new NodeCache({stdTTL: 120}) // Tiempo duracion de cache en segundos

router.get('/get', async function(request, response){
    let connection
    try{
        connection = await pool.getConnection()
        const rows = await connection.query('select * from ascmArboles')
        response.json(rows)
    }
    catch(error){
        console.log(error)
    }
    finally {
        if (connection) connection.end()
    }
})

router.post('/add', async function(request, response){
    const data = request.body
    try{
        connection = await pool.getConnection()

        const rows = await connection.query(`
        insert into ascmArboles (ascmMunicipiosId, nombre, nombre_cientifico, numero, imagen, imagen_fecha, descripcion, descripcion_acceso, estado, altura, diametro_copa, perimetro_tronco, edad, altitud, latitud, longitud) 
        VALUES (${data.municipio}, '${data.nombre}', '${data.nombre_cientifico}', ${data.numero}, '${data.imagen}', '${data.fecha_imagen}', '${data.descripcion}', '${data.descripcion_acceso}', ${data.estado}, 
        ${data.altura}, ${data.diametro_copa}, ${data.perimetro_tronco}, ${data.edad}, ${data.altitud}, ${data.latitud}, ${data.longitud})`)
        response.send({status: 'info recibida'})
    }
    catch(error){
        console.log(error)
    }
    finally {
        if (connection) connection.end()
    }
})

router.get('/countArboles', async function(request, response){
    if (countArbolesCache.has('rows')){
        response.json(countArbolesCache.get('rows'))
    }

    else {
        let connection
        try{
            connection = await pool.getConnection()
            const rows = await connection.query('select count(nombre) as total from ascmArboles')
            countArbolesCache.set('rows', {'total': rows[0].total.toString()})
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