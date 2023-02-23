import React from 'react'
import { Link } from 'react-router-dom'
import '../Nav/nav.scss'
function Nav() {
  return (
    <div className='nav'>
        <Link to="/">Views</Link>
        <Link to="/views">My Views</Link>
        <Link to="/views/new">Add New View</Link>
    </div>
  )
}

export default Nav