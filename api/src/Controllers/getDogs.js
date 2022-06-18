const axios = require('axios');
const {API_KEY} = process.env
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
const { Dog, Temperament } = require('../db');
 
const getDogs = async (req,res, next) =>{
    try {
        let dogsApi = []
        let dogdb = []
     let { data } =  await axios.get(URL)
        dogsApi =  data.map((d =>{
            return{
                name: d.name,
                id: d.id,
                temperaments: d.temperament,
                img: d.image.url,
                weight: d.weight.metric,
                height: d.weight.metric
            }
        }))
       let dogsdb = await Dog.findAll({
            include: {
               model: Temperament,
               atributes:['name']

            }
        }).then(response =>{
            dogdb = response.map((d)=>{
                return{
                name: d.name,
                temperaments: d.temperament,
                img: d.image,
                weight: d.weight,
                height: d.weight,
                id: d.id,
                years: d.years
                }
            });
        })
           //console.log(dogsdb)
        let alldogs = dogsApi.concat(dogdb);
     //ultimo
/////////////llega un nombre por query input//////////////
     const name = req.query.name;
         if(name){
        const info = alldogs.filter((d)=> d.name.toLowerCase().includes(name.toLowerCase())) 
     info.length < 1 ? res.status(404).send('Mascota no encontrada, ingrese otro nombre valido') : 
        res.status(200).json(info);
         }else{
          res.status(200).json(alldogs);
         }
    } catch (error) {
       next(error) 
    }
}
module.exports = getDogs
