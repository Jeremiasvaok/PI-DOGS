const axios = require('axios')
const getDogs = require('./getDogs')
const {API_KEY} = process.env
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
const { Dog, Temperament} = require('../db')

const dogsById = async(req, res) =>{
  try {
    let id = req.params.id
    if( typeof id === 'string' && id.length > 6){
  const dogsDb = await Dog.findByPk(id, {
             include: Temperament,
           });
            return res.status(200).json({
                  name: dogsDb.name,
                  id: dogsDb.id,
                  height_min: dogsDb.height_min,
                  height_max: dogsDb.height_max,
                  weight_min: dogsDb.weight_min,
                  weight_max: dogsDb.weight_max,
                  life_time_min: dogsDb.life_time_min,
                  life_time_max: dogsDb.life_time_max,
                  image: dogsDb.image,
                  temperament: dogsDb.temperaments.map(i =>{
                 return i.name
          }).join(", ")
            });
  }else{
      let {data} = await axios.get(URL)
      let dog =  data.find((d) => d.id === parseInt(id))
          return res.status(200).json({
              name: dog.name,
              id: dog.id,
              height_min:
                dog.height.metric.split(" - ")[0] && dog.height.metric.split(" - ")[0],
              height_max:
                dog.height.metric.split(" - ")[1] && dog.height.metric.split(" - ")[1],
              weight_min:
                dog.weight.metric.split(" - ")[0] !== "NaN"
                  ? dog.weight.metric.split(" - ")[0] : 6,
              weight_max:
                dog.weight.metric.split(" - ")[1] && dog.weight.metric.split(" - ")[1],
                life_time_min:
                dog.life_span.split(" - ")[0] && dog.life_span.split(" - ")[0],
                life_time_max:
                dog.life_span.split(" - ")[1] &&
                dog.life_span.split(" - ")[1].split(" ")[0],
                temperament: dog.temperament ? dog.temperament : "Unknown",
                image: dog.image.url,
          });
  }
}catch (error){
      res.status(404).send('Dog not found')
    }
}
module.exports = dogsById