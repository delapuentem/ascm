const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// Settings
app.set('port', port)

// Views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Static
app.use(express.static(__dirname + '/public'))

// Middleware
app.use(require('./middleware/middleware'))
app.use(require('./middleware/multer'))

// Routes
app.use(require('./routes/home'))
app.use(require('./routes/upload'))
app.use('/api', require('./routes/api/index'))
app.use('/api', require('./routes/api/arboles'))
app.use('/api', require('./routes/api/municipios'))
app.use('/api', require('./routes/api/upload'))

// Start the server
app.listen(app.get('port'), function(){
    console.log(`Server listening on port ${app.get('port')}`)
})