import { 
    GET_ALL_DOGS, 
    GET_DOGS_DETAILS,
    SEARCH_BY_NAME, 
    CREATE_DOG, 
    GET_TEMPERAMENTS, 
    FILTER_TEMPERAMENTS,
    ORDER_A, 
    ORDER_Z,
    ORDER_BY_WEIGHT,
    DATEBASE,
    ALL} from "../Action"; 


const initialState={
    dogs: [],
    temperaments:[],
    details:{},
    allDogs:[]
};
function rootReducer(state= initialState, action){
     switch (action.type) {
         case GET_ALL_DOGS:
             return{
             ...state,
             dogs: action.payload,
             allDogs: action.payload
         }
         case GET_DOGS_DETAILS: 
             return{
               ...state,
               details: action.payload 
         }
    
         case SEARCH_BY_NAME:
             return {
                ...state,
                dogs: action.payload
             }
         case CREATE_DOG:
             return{
                ...state
                 }
         case GET_TEMPERAMENTS:
             return{
                ...state,
                temperaments: action.payload
                 }
         case ORDER_A:
            return{
                ...state,
                dogs: action.payload
            }
         case ORDER_Z:
            return{
                ...state,
                dogs: action.payload
            }
         case ORDER_BY_WEIGHT:
            let sortWeight = action.payload === 'weightasc' ? 
               
               state.dogs.sort(function (a, b){  
               return b.weight_min - a.weight_min;
                 }) :
               state.dogs.sort(function(a, b){
               return a.weight_min - b.weight_min;
                })
               return{
               ...state,
               dogs: sortWeight
            }
         case DATEBASE:
            return{
                ...state,
                dogs: state.dogs.filter(d => d.id.length > 6)
            }
         case ALL:
            return{
                ...state,
                dogs: state.dogs
            }
            case FILTER_TEMPERAMENTS:
            const allDogs = state.allDogs;
            // console.log(allDogs)
            const temperamentsFilter = action.payload === "all" ? allDogs : allDogs.filter((el) => {
              return el.temperament?.split(", ").includes(action.payload)
            })
        
                return {
                    ...state,
                    dogs: temperamentsFilter
                }
         default:
            return initialState
     }
}

export default rootReducer;