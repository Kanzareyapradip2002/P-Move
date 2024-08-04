import React from 'react'
import { Link } from 'react-router-dom'
export default function Main() {
  return (
     <>
     <nav className=" navbar navbar-expand-lg">
  <div className="container-fluid">
      <img className='logo' src={require("./img/logo.jpg")} alt="" />
   <button
      className="navbar-toggler Hide"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
            <Link className='main' to="/" ></Link>
        </li>
        <li className="nav-item">
            <Link className='main' to="/gotoHollywood" >Hollywood</Link>
        </li>
        <li className="nav-item">
        <Link className='main' to="/gotoBollywood" >Bollywood</Link>
        </li>
        <li className="nav-item">
          <Link className='main' to="/gotoSouthMovie" >South Move</Link>
        </li>
        <li className="nav-item">
          <Link className='main' to="/gotoWebSeries" >Web Series</Link>
        </li>
      </ul>
      <div>
        <div>
          <img src="" alt="" />

        </div>
      </div>
    </div>
  </div>
</nav>

     </>
  
  )
}

