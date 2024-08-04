import React from 'react'
import { Link } from 'react-router-dom'


const Serise1 = () => {
  return (
    <>
    <div className='Main'>
    <div className='card'>
      <Link to="/Season1">
      <img className="card-img" src={require("./img/logo.jpg")} alt="" />
     </Link>
     <h4 className='Season'>Season 1</h4>
    </div>
    <div className='card'>
      <Link to="/serise1">
      <img className="card-img" src={require("./img/logo.jpg")} alt="" />
     </Link>
     <h4 className='Season'>Season 2</h4>
    </div>
    <div className='card'>
      <Link to="/serise1">
      <img className="card-img" src={require("./img/logo.jpg")} alt="" />
     </Link>
     <h4 className='Season'>Season 3</h4>
    </div>
    </div>
    </>
  )
} 
export {Serise1}

