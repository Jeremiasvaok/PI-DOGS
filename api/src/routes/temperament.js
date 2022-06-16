const  { Router } = require('express')
const getTemperaments = require('../Controllers/temperament')
const router = Router()

router.get('/', getTemperaments)

module.exports = router