import axios from "axios";

export const IS_LOADING = "IS_LOADING";
export const DATA_LOAD_SUCCESS="DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR="DATA_LOAD_ERROR";


export const loadDataForLocation = (location) =>(dispatch)=>{
  //transition to isLoadingState  
  dispatch({type:IS_LOADING});
  console.log(`make your axios call`)
  setTimeout(() =>{
  axios
  .get(`https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49  `)
  .then((res) =>{
      console.log(`KH: acions.js loadDataForLocation axios:good`, res)
      dispatch({type: DATA_LOAD_SUCCESS,
        payload:{title:res.data.title, description:res.data.description}
      })
  })
  .catch(err =>{
      console.log(`KH acions.js loadDataForLocation axios bad`, err)
      dispatch({type:DATA_LOAD_ERROR, payload: `error fetching data: ${err.message}`
    })
  })
}, 1500)
}


