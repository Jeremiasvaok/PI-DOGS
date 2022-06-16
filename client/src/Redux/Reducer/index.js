import { 
    GET_ALL_DOGS, 
    GET_DOGS_DETAILS,
    SEARCH_BY_NAME, 
    CREATE_DOG, 
    GET_TEMPERAMENTS, 
    FILTER_TEMPERAMENTS,
    ORDER_A, 
    ORDER_Z,
    WEIGHT_A,
    WEIGHT_Z,
    DATEBASE,
    ALL} from "../Action"; 


const initialState={
    dogs: [],
    temperaments:[],
    details:[],
    createDogs:[]
};
function rootReducer(state= initialState, action){
     switch (action.type) {
         case GET_ALL_DOGS:
             return{
             ...state,
             dogs : action.payload,
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
                ...state,
                createDogs: action.payload
                 }
         case GET_TEMPERAMENTS:
             return{
                ...state,
                temperaments: action.payload
                 }
         case FILTER_TEMPERAMENTS:
            const filters = action.payload === null ? state.dogs : state.dogs.filter((d)=> {
                if(d.temperament && d.temperament.include(action.payload))
                return d
            });
            return {
                ...state,
                dogs: filters,
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
         case WEIGHT_A:
            return{
                ...state,
                dogs: action.payload,
            }
         case WEIGHT_Z:
            return{
                ...state,
                dogs: action.payload
            }
         case DATEBASE:
            return{
                ...state,
                dogs: state.dogs.filter(d => d.id.length > 20)
            }
         case ALL:
            return{
                ...state,
                dogs: state.dogs
            }
         default:
            return initialState
     }
}

export default rootReducer;