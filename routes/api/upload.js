const { Router } = require('express')
const router = Router()

const fetch = require('node-fetch')

// Conexion mariadb
const pool = require('../../config/mariadb')



router.post('/upload', async function(request, response){ 

    let connection

    try{
        connection = await pool.getConnection()
        // Recuperar el nombre del municipio a partir del id del municipio
        const rows = await connection.query(`select ascmMunicipiosId from ascmMunicipios where municipio = '${request.body.municipio}'`)
        const municipio = rows[0].ascmMunicipiosId

        const data = {
            nombre: request.body.nombre,
            nombre_cientifico: request.body.nombre_cientifico,
            municipio: municipio,
            numero: parseInt(request.body.numero),
            estado: String(request.body.estado).toLocaleLowerCase() === String('EXISTE').toLocaleLowerCase() ? 1 : 0,
            altura: parseFloat(request.body.altura.replace(',', '.')),
            diametro_copa: parseFloat(request.body.diametro_copa.replace(',', '.')),
            perimetro_tronco: parseFloat(request.body.perimetro_tronco.replace(',', '.')),
            edad: parseFloat(request.body.edad.replace(',', '.')),
            altitud: parseFloat(request.body.altitud.replace(',', '.')),    
            latitud: String(request.body.latitud),
            longitud: String(request.body.longitud),             
            descripcion: request.body.descripcion,   
            descripcion_acceso: request.body.descripcion_acceso,                                                                             
            imagen: request.file.filename,
            fecha_imagen: request.body.fecha_imagen,     
        }        


        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
      
        fetch('http://localhost:3000/api/add', options)
            .then(response => response.json())
            .then(data => console.log(data))

        response.send(data)
        
    }
    catch(error){
        console.log(error)
    }          
    finally {
        if (connection) connection.end()
    }    

    
})

module.exports = router