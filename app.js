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
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
app.use(require('./config/middleware'))

// Routes
app.use(require('./routes/index'))
app.use('/api', require('./routes/api/index'))

// Start the server
app.listen(app.get('port'), function(){
    console.log(`Server listening on port ${app.get('port')}`)
})