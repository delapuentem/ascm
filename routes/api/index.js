const { Router } = require('express')
const router = Router()

router.get('/', function(request, response){
    response.json({
        statusCode: response.statusCode
    })
})

module.exports = router