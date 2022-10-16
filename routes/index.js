const { Router } = require('express')
const router = Router()

router.get('/', function(request, response){
    OPTIONS = {
        title: 'Inicio',
    }
    response.render('index', OPTIONS)
})

module.exports = router