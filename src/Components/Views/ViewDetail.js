import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewDetail() {

  const [ view, setView ] = useState([]);
  const { id } = useParams();
  
  useEffect(() =>{
    axios.get(`http://localhost:8080/views/${id}`)
    .then(res => setView(res.data.payload))
    .catch(err => console.log(err)) 
  }, [])

  const { name, url, location, is_favorite } = view;
  return (
    <div className='ViewDetail'>
        <h1>Peep Some Deets</h1>
        <p>{name}</p>
        <img src={url}/>
        <p>{location}</p>
        <h4>{is_favorite ? "🌊What a View 🌊" : ""}</h4>
        

    </div>
  )
}

export default ViewDetail