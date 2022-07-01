import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { useParams ,Link} from 'react-router-dom'
import Details from "./Details";

const initialState = {
  loading: true,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: ""
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: action.payload,
        error: "something went wrong"
      };
    default:
      return state;
  }
};

function DataFectchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { detailsid } = useParams()

  useEffect(() => {
    const API_BASE_URL = `https://jsonplaceholder.typicode.com/posts`
    axios.get(`${API_BASE_URL}/${detailsid}`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  },[detailsid]);

  if(state.loading) {
    return <div>...Loading"</div>
  }
  else if(state.error) {
    return <div>{state.error}</div>
  }
  else {
    return (
      <div>
       

        {
            <Details item={state.post}/>
          }
       
        
        
      </div>
    );
  }
 
}

export default DataFectchingTwo;
