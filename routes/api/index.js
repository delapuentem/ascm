const { Router } = require('express')
const router = Router()

router.get('/', function(request, response){
    if(response.statusCode === 200){
        message = 'Welcome to ASCM API'
    }
    else{
        message = `Error. ${response.statusMessage}`
    }

    response.json({status: response.statusCode, message: message})
})

module.exports = router