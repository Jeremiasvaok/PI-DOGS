
const  { Dog, Temperament } = require('../db')
const createDog = async (req,res, next) =>{
    try {
         const {name ,height,image , weight, years, temperament} = req.body
        let createDog = await Dog.create({
            name ,
            height, 
            weight,
            image, 
            years
        });
         let tempe = await Temperament.findAll({
             where : { 
                name: temperament
            },
         }) 
               
          await createDog.addTemperament(tempe)
          res.status(201).send('Nueva mascota creada');
         //res.send(tempe)
          //console.log(createDog)
    } catch (error) {
        next(error)
    }
}

module.exports = createDog