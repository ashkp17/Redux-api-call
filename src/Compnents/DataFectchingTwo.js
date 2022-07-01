import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

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

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  });

  if(state.loading) {
    return <div>...Loading"</div>
  }
  else if(state.error) {
    return <div>{state.error}</div>
  }
  else {
    return (
      <div>
        <table border="1">
          <tr>
          <th>Title</th>
          <th>Body</th>
          </tr>
        {
            state.post.map((item) => 
            <tr key={item.id}>
             <td><Link to={`/details/${item.id}`}>{item.title}</Link></td>
              <td><Link to={`/details/${item.id}`}>{item.body}</Link> </td>
              </tr>)
          }
        </table>
      </div>
    );
  }
 
}

export default DataFectchingTwo;
