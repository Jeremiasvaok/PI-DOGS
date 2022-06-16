const  { Router } = require('express')
const router = Router()
const  getDogs  = require('../Controllers/getDogs')

router.get('/',getDogs)

module.exports = router
