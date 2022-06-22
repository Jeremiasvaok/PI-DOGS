import axios from 'axios';
export const  GET_ALL_DOGS = 'GET_ALL_DOGS';
export const  GET_DOGS_DETAILS = 'GET_DOGS_DETAILS';
export const  SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const  CREATE_DOG = 'CREATE_DOGS';
export const  GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const  FILTER_TEMPERAMENTS = 'FILTER_TEMPERAMENTS'
export const  ORDER_Z = 'ORDER_Z'
export const  ORDER_A = 'ORDER_A'
export const  ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'
export const  DATEBASE = 'DATEBASE'
export const  ALL = 'ALL'

export const getAllDogs = () => async(dispach)=>{
    try {
        let response = await axios.get('http://localhost:3001/dogs');
        dispach({
             type: GET_ALL_DOGS,
             payload: response.data
         });
    } catch (error) {
        console.log(error)
    }
}

export const getDogsDetails =(id) => async (dispach) =>{
    try {
        const response = await axios.get(`http://localhost:3001/dogs/${id}`);
        dispach({
            type: GET_DOGS_DETAILS,
            payload: response.data
 })
    } catch (error) {
        console.log(error)
   }
}

export const searchByName = (name) => async(dispach) =>{
    try {
        const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      dispach({
         type: SEARCH_BY_NAME ,
         payload: response.data
     });
    } catch (error) {
        alert('Dogs not found')
    } 
}

export const createDog = (info) => async (dispach)=>{
    try {
    const createDog = await axios.post(`http://localhost:3001/dog`, info)
     dispach({
            type: CREATE_DOG,
            payload: createDog
        })
        } catch (error) {
            console.log(error)
        }
}
 
export function getTemperaments(){
   return async function (dispach){
    var response = await axios.get('http://localhost:3001/temperaments');
     dispach({
            type: GET_TEMPERAMENTS,
            payload: response.data
        })
    }
}

export const filterTem = (payload) =>{
    return{
        type: FILTER_TEMPERAMENTS,
        payload,
    }
}

export const orderAZ = () => async (dispach)=>{
    const response = await axios.get('http://localhost:3001/dogs');
    const aOrder = response.data.sort((a,b) =>{
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0;
    })
    dispach({
        type: ORDER_A,
        payload: aOrder
    })
}

export const orderZA = () => async (dispach)=>{
    try{
        const response = await axios.get('http://localhost:3001/dogs');
    const zOrder = response.data.sort((b, a) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    });
    dispach({
        type: ORDER_Z,
        payload: zOrder
    });
    } catch(err){
        console.log(err);
    }
}

export const orderByWeight = (payload) =>{
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}

export const filter = (value) =>{
    if(value === 'DATEBASE') return{ type: DATEBASE, }
}
