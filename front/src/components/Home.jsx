import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <Link to='/signup'><button>Signup</button></Link>
    </div>
  )
}

export default Home
