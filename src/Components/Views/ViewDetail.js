import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Views/ViewDetail.scss'

function ViewDetail() {

  const [ view, setView ] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  
  useEffect(() =>{
    axios.get(`http://localhost:8080/views/${id}`)
    .then(res => setView(res.data.payload))
    .catch(err => console.log(err)) 
  }, [])

  const deleteView = () => {
    axios.delete(`http://localhost:8080/views/${id}`)
    .then(navigate('/views'))
    .catch(err => console.error('error'))
  }

  const handleDelete = () => {
    deleteView()
  }

  const { name, url, location, is_favorite } = view;
  return (
    <div className='viewDetail'>
        <h1>Peep Some Deets</h1>
        <h2>{name}</h2>
        <img src={url}/>
        <h3>{location}</h3>
        <h4>{is_favorite ? "🌊What a View 🌊" : ""}</h4>
        <Link to={`/views/${id}/edit`}><button className='viewDetail__button--onClick'>Edit View</button></Link>
        <button onCLick={handleDelete}>Delete This View</button>
        <Link to={`/views`}><button> Nah Nevermind</button></Link>

    </div>
  )
}

export default ViewDetail