const { Router } = require('express');
 
const routerDog = require('./addDog')
const routerDogs = require('./getDogs')
const routerTemperament = require('./temperament')
const routerdogsById = require('./dogsById')

const router = Router();

router.use('/dog', routerDog)
router.use('/dogs', routerDogs)
router.use('/temperaments', routerTemperament)
router.use('/dogs', routerdogsById);

module.exports = router;
