const { Router } = require('express')
const router = Router()
const dogsById = require('../Controllers/dogsById')

router.get('/:id', dogsById)

module.exports = router;