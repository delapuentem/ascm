const { Router } = require('express')
const router = Router()

router.get('/upload', function(request, response){
    OPTIONS = {
        title: 'Upload',
    }
    response.render('upload', OPTIONS)
})

module.exports = router