import axios from 'axios';
export const  GET_ALL_DOGS = 'GET_ALL_DOGS';
export const  GET_DOGS_DETAILS = 'GET_DOGS_DETAILS';
export const  SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const  CREATE_DOG = 'CREATE_DOGS';
export const  GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const  FILTER_TEMPERAMENTS = 'FILTER_TEMPERAMENTS'
export const  ORDER_Z = 'ORDER_Z'
export const  ORDER_A = 'ORDER_A'
export const  WEIGHT_Z = 'WEIGHT_Z'
export const  WEIGHT_A = 'WEIGHT_A'
export const  DATEBASE = 'DATEBASE'
export const  ALL = 'ALL'

export const getAllDogs = () => async (dispach) =>{
    const response = await fetch('http://localhost:3001/dogs');
    const payload = await response.json();
    dispach({
        type: GET_ALL_DOGS,
        payload
    });
}

export const getDogsDetails =(id) => async (dispach) =>{
    const response = await fetch(`http://localhost:3001/dogs/${id}`);
    const payload = await response.json();
    dispach({
        type: GET_DOGS_DETAILS,
        payload
    })
}

export const searchByName = (name) => async(dispach) =>{
    const response = await fetch(`http://localhost:3001/dogs?name=${name}`);
    const payload = await response.json();
      dispach({
         type: SEARCH_BY_NAME ,
         payload
     });
}

export const createDog = (info) => async (dispach)=>{
    try {
    const createDog = await axios.post(`http://localhost:3001/dog`, info)
        return dispach({
            type: CREATE_DOG,
            payload: createDog
        })
        } catch (error) {
            console.log(error)
        }
}
 
export const getTemperaments = () => async (dispach) =>{
    const response = await fetch('http://localhost:3001/temperament');
    const payload = await response.json();
    dispach({
        type: GET_TEMPERAMENTS,
        payload
    })
}

export const filterTem = (payload) =>{
    return{
        type: FILTER_TEMPERAMENTS,
        payload
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
}

export const weightZA =() => async (dispach)=>{
    const response = await axios.get('http://localhost:3001/dogs');
    const aWeight = response.data.sort((b,a)=>{
        if(parseInt(a.weight) > parseInt(b.weight)) return 1;
        if(parseInt(a.weight) < parseInt(b.weight)) return -1;
        return 0;
    })
    dispach({
        type: WEIGHT_Z,
        payload: aWeight
   })
}

export const weightAZ = () => async (dispach) => {
    const response = await axios.get('http://localhost:3001/dogs');
    const zWeight = response.data.sort((a,b) =>{
        if(parseInt(a.weight) > parseInt(b.weight)) return 1;
        if(parseInt(a.weight) < parseInt(b.weight)) return -1; 
        return 0;
    })
    dispach({
        type: WEIGHT_A,
        payload: zWeight
    })
}

export const filter = (value) =>{
    if(value === 'DATEBASE') return{ 
        type: DATEBASE,
     }
    if(value === 'ALL') return{
         type: ALL, 
        }
}