import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {loadDataForLocation} from "../actions/index"

const AnimeList = ({api_data,title,description,isFetching,error,...props}) => {
  useEffect(() =>{

  })
  const handleloadDataForLocation = e =>{
    e.preventDefault();
    props.loadDataForLocation()
  }
    if(error){
      return <h2>We got an error: {error}</h2>
    }
    if(isFetching){
      return <h2>Fetching a movie</h2>
    }
    return(
      <>
      <h1>{api_data.title}</h1>
      <h2>{api_data.description}</h2>
      <button onClick={handleloadDataForLocation}> Load new movie</button>
      </>
    )
}

const mapStateToProps =(state)=> {
    return {
        isFetching: state.is_fetching,
        api_data:state.api_data,
        title:state.title,
        description:state.description,
        error:state.error
    }
}

export default connect (mapStateToProps,{loadDataForLocation})(AnimeList);
//AnimeList wants to know what the existing state is so we can update properly