const  { Router } = require('express')
const router = Router()
const  createDog  = require('../Controllers/createDog');

router.post('/', createDog)

module.exports = router