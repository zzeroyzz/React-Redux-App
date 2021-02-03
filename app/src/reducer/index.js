import { IS_LOADING, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from "../actions/index"

const initialState = {
   api_data:[{ //START_FETCHING_DATA
    is_fetching:false,
    id:"58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    description:"",
    title:"",
    error:''}]
}

const animeReducer = (state = initialState, action) => {
    switch(action.type){
        case IS_LOADING:
            return{
                ...state,
                is_fetching:true
            }
        case DATA_LOAD_SUCCESS:{
            return{
                ...state,
                is_fetching:false,
                api_data:action.payload,
                
            }
        }
        case DATA_LOAD_ERROR:
            return{
                ...state,
                is_fetching:false,
                error:action.payload
            }
        default:
            return state;
    }
    

}

export default animeReducer;