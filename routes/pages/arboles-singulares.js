const { Router } = require('express')
const router = Router()

router.get('/arboles-singulares', function(request, response){
    OPTIONS = {
        title: 'Árboles singulares de la Comunidad de Madrid',
    }
    response.render('arboles-singulares', OPTIONS)
})

module.exports = router