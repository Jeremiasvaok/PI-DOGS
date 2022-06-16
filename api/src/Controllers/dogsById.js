const axios = require('axios')
const {API_KEY} = process.env
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
const { Dog } = require('../db')

const dogsById = async(req,res, next) =>{
    try {
    let { id } = req.params
    if( typeof id === 'string' && id.length > 20){

        const detailDb = await Dog.findByPk(id)
              return res.json({
                  name: detailDb.name,
                  id: detailDb.id,
                  height: detailDb.height,
                  weight: detailDb.weight,
                  years: detailDb.years,
                  temperament: detailDb.temperament,
                  image: detailDb.image
              })
    }else{
        let { data } =  await axios.get(URL)
        let detailApi = data.find((d) => d.id === parseInt(id))
            return res.json({
                name: detailApi.name,
                id: detailApi.id,
                height: detailApi.height.metric,
                weight: detailApi.weight.metric,
                life_span: detailApi.life_span,
                temperament: detailApi.temperament,
                image: detailApi.image.url
            })
    }
    } catch (error) {
        next(error)
    }
}
module.exports = dogsById