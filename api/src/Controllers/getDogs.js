const axios = require('axios');
const {API_KEY} = process.env
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
const { Dog, Temperament } = require('../db');
 
const getDogs = async (req, res, next) =>{
    try {
        let dogsApi = [];
        let dogdb = [];
     let {data} = await axios.get(URL);
        dogsApi = data.map((e) =>{
            return {
                name: e.name,
                id: e.id,
                height_min:
                  e.height.metric.split(" - ")[0] && e.height.metric.split(" - ")[0],
                height_max:
                  e.height.metric.split(" - ")[1] && e.height.metric.split(" - ")[1],
                weight_min:
                  e.weight.metric.split(" - ")[0] !== "NaN"
                    ? e.weight.metric.split(" - ")[0] : 6,
                weight_max:
                  e.weight.metric.split(" - ")[1] && e.weight.metric.split(" - ")[1],
                life_time_min:
                  e.life_span.split(" - ")[0] && e.life_span.split(" - ")[0],
                life_time_max:
                  e.life_span.split(" - ")[1] &&
                  e.life_span.split(" - ")[1].split(" ")[0],
                temperament: e.temperament ? e.temperament : "Unknown",
                  image: e.image.url,
              };
            });
          const dogss = await Dog.findAll({
            include: Temperament,
        });
        //console.log(dogss)
        dogdb = dogss.map((e)=>{
            let tem = e.temperaments.map(e => e.name);
            let auxi = tem.join(", ");
             return{
        name: e.name,
        id: e.id,
        height_max: e.height_max,
        height_min: e.height_min,
        weight_max: e.weight_max,
        weight_min: e.weight_min,
        life_time_max: e.life_time_max,
        life_time_min: e.life_time_min,
        temperament: auxi,
        image: e.image
             }
         });
 
        let alldogs = dogsApi.concat(dogdb);
//<---------------------------------busqueda query-------------------------------------------------------------->
      const name = req.query.name;
    if(name){
      const info = await alldogs.filter((d)=> d.name.toLowerCase().includes(name.toLowerCase()));
       info.length ? res.status(200).json(info) :
       res.status(404).json('Mascota no encontrada, ingrese otro nombre valido') 
      }else{
      return res.status(200).json(alldogs);
    }
      } catch (error) {
      next(error);
      }
}
module.exports = getDogs