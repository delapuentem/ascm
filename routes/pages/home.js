const { Router } = require('express')
const router = Router()

router.get('/', function(request, response){
    OPTIONS = {
        title: 'Inicio',
    }
    response.render('home', OPTIONS)
})

module.exports = router