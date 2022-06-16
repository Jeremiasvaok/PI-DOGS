const axios = require('axios')
const { Temperament } = require('../db')
const { API_KEY} = process.env
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

const getTemperaments = async (req,res, next) =>{
    try {
        let { data } = await axios.get(URL)
        let temperamentApi = data.map(t => t.temperament); 
      
        let tempOrder = temperamentApi.join().split(",");
      
        let tempRepeated = [...new Set(tempOrder)].sort()

        let tempMap = tempRepeated.map((e) =>{
           return{
               name: e,
           }
       }).filter((e => e.name))
       
const temperamentsAll = await Temperament.bulkCreate(tempMap);
      res.send(temperamentsAll)
      
    } catch (error) {
        next(error)
    }
}

module.exports = getTemperaments