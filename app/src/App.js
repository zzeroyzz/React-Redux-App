import './App.css';
import React, {useEffect} from "react"
import {loadDataForLocation} from "./actions/index"
import {connect} from "react-redux";
import AnimeList from './components/AnimeList'
import SearchForm from './components/SearchForm'
import animeReducer from './reducer/index'
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
const store = createStore(animeReducer, applyMiddleware(thunk))

function App(props) { 
  useEffect(() =>{
    props.loadDataForLocation()
  },[])
  return (
   <Provider store={store}>
    <div className="App">
      <h1>Ghibli-pi</h1>
      <SearchForm />
      {/* <h1> {props.api_data.title} </h1>
      <h4> {props.api_data.description} </h4> */}

      <AnimeList />
    </div>
    </Provider>
  );
}
const mapStateToProps = (state) =>{
  return{
    api_data:state.api_data,
  error:state.error
}
}
export default connect(mapStateToProps, { loadDataForLocation })(App);
