import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../Forms/forms.scss'

function NewView() {

  const [view, setView ] = useState({
    name: "",
    url: "",
    location: "",
    is_favorite: true
  })

  const navigate = useNavigate();

  const addView = () => {
    axios.post(`http://localhost:3036/views`, view)
    .then(navigate('/views'))
    .catch(err => console.error(err))
  }

  const handleTextChange = (e) => {
    setView([{...view, [e.target.id] : e.target.value}]) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addView(view)
  }

  return (
    <div className="new">
      <form onSubmit={handleSubmit} className="new">
      <h1>Let's Add Something New!</h1>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={view.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
          <br />
          <br />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          value={view.url}
          type="text"
          placeholder="URL"
          onChange={handleTextChange}
        />
          <br />
          <br />
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          type="text"
          name="locations"
          value={view.location}
          placeholder="Location"
          onChange={handleTextChange}
        />
          <br />
          <br />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="text"
          name="is_favorite"
          value={view.is_favorite}
          placeholder="Favorite?"
          onChange={handleTextChange}
        />
        <br />
        <br />
        <input type="submit" className='submit'/>
      </form>
    </div>
  )
}

export default NewView