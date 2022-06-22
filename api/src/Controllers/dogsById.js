const axios = require('axios')
const {API_KEY} = process.env
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
const { Dog } = require('../db')

const dogsById = async(req, res, next) =>{
    try {
    let { id } = req.params
    if( typeof id === 'string' && id.length > 20){
        const detailDb = await Dog.findByPk(id)
              return res.status(200).json({
                    name: detailDb.name,
                    id: detailDb.id,
                    height_min: detailDb.height_min,
                    height_max: detailDb.height_max,
                    weight_min: detailDb.weight_min,
                    weight_max: detailDb.weight_max,
                    life_time_min: detailDb.life_time_min,
                    life_time_max: detailDb.life_time_max,
                    temperament: detailDb.temperament,
                    img: detailDb.img,
              });
    }else{
        let {data} = await axios.get(URL)
        let datailApi =  data.find((d) => d.id === parseInt(id))
            return res.status(200).json({
                name: datailApi.name,
                id: datailApi.id,
                height_min:
                  datailApi.height.metric.split(" - ")[0] && datailApi.height.metric.split(" - ")[0],
                height_max:
                  datailApi.height.metric.split(" - ")[1] && datailApi.height.metric.split(" - ")[1],
                weight_min:
                  datailApi.weight.metric.split(" - ")[0] !== "NaN"
                    ? datailApi.weight.metric.split(" - ")[0] : 6,
                weight_max:
                  datailApi.weight.metric.split(" - ")[1] && datailApi.weight.metric.split(" - ")[1],
                  life_time_min:
                  datailApi.life_span.split(" - ")[0] && datailApi.life_span.split(" - ")[0],
                  life_time_max:
                  datailApi.life_span.split(" - ")[1] &&
                  datailApi.life_span.split(" - ")[1].split(" ")[0],
                  temperament: datailApi.temperament ? datailApi.temperament : "Unknown",
                  image: datailApi.image.url,
            });
    }
}catch (error){
        next(error)
    }
}
module.exports = dogsById