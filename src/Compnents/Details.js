import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import "./../styles.css"; 

function Details({item}) {
 
    return (
    <div className="details">
    <h1>Detils Page</h1>
    <table border='1'>
    <thead>
    <tr><th>userId</th>
     <th>id</th>
      <th>Title</th>
      <th>Body</th></tr></thead>
    <tbody>
      <tr>
        <td>{item.id}</td>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
      </tr>
    </tbody>

    </table>
   <Link to={`/`}><button>Back to Main</button></Link> 
      </div>
    );
}

export default Details;
