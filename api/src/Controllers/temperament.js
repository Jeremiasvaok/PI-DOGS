const axios = require('axios')
const { Temperament } = require('../db')
const { API_KEY} = process.env
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

const getTemperaments = async (req, res, next) =>{
    try { 
        let {data} = await axios.get(URL);
        let temperamentApi = data.map(t => t.temperament); 
      
        let tempOrder = temperamentApi.join(", ").split(", ");
    
        let tempRepeated = [...new Set(tempOrder)].sort()
        
        tempRepeated.forEach(el => {
            Temperament.findOrCreate({
                where: { name: el },
            })
        });
        const allTemperament = await Temperament.findAll();
        res.status(200).send(allTemperament);
    } catch (error) {
        next(error);
    }
}

module.exports = getTemperaments