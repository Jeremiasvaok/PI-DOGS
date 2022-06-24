const  { Dog } = require('../db')

const createDog = async (req, res, next) =>{
    try {
         const {name, height_min, height_max, weight_min, weight_max, life_time_min, life_time_max, temperament, image} = req.body
        let createDog = await Dog.create({
            name,
            height_min,
            height_max,
            weight_min,
            weight_max,
            life_time_min,
            life_time_max,
            image,
        });
          await createDog.addTemperament(temperament)
          res.status(201).send('Nueva mascota creada');
    } catch (error) {
        next(error)
    }
}

module.exports = createDog