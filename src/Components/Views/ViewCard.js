import React from 'react'

function ViewCard({ view }) {

  const { name, location, url } = view;

  return (
    <div className='viewCard'>
      <h1>{name}</h1>
      <img src={url} />
      <h3>{location}</h3>
    </div>
  )
}

export default ViewCard