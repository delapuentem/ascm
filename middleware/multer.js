const express = require('express')
const path = require('path')
const multer = require('multer')

const app = express()



const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/upload'),
    filename: function(request, file, callback){
        callback(null, `${String(request.body.nombre).replaceAll(' ', '-').toLocaleLowerCase()}-image${path.extname(file.originalname)}`)
    }
})

const multerOptions = {
    dest: path.join(__dirname, '../public/upload'),
    storage: storage,
    // Tamañano maximo de la imagen 2 MB
    limits: {fileSize: 2000000} 
}

app.use(multer(multerOptions).single('imagen'))

module.exports = app