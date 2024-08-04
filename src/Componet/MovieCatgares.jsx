import React from 'react'
import { Link } from 'react-router-dom'
import Main from './Main'

  
const Hollywood = () => {
  
  return (
   <>
   <Main/>
   <div className='Main'>
    <div className='card'>
    <Link to="/BlackAdam">
    <img className="card-img" src={require("./img/BlackAdam1.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/GhostRider">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/GuaroiansGalaxy">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/ProjectLegion">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/EagleEye">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/ThePerfectNanny">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/AHardDay">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div> <div className='card'>
    <Link to="/BeWithYou">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/BlameTheGame">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/Thelnavasin">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/CobWeb">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/TheBigHit">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/HitMan">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/MafiaMamma">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/MeanGirls">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/MirrorMirror">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/ExcessBaggage">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/CurseofTheKraken">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/TheThieves">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/FierceCop">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/TheGhostAndTheDarkness">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/LiesBeneathTheSurface">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/RvResurrectedVictims">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/KingdomofThePlanet">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/Unbreakable">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/Architecture">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/AlongWithTheGods">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
   </div>
   <div>
   <nav aria-label="Page navigation example">
    <ul className="pagination ">
    <li className="page-item"><Link className='page-link' to="/gotoHollywood">1</Link></li>
    <li className="page-item"><Link className='page-link' to="/gotoHollywoodPage2">2</Link></li>
    <li className="page-item"><Link className='page-link' to="/gotoHollywoodPage3">3</Link></li>
    <li className="page-item"><Link className='page-link' to="/gotoHollywoodPage4">4</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage5">5</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage6">6</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage7">7</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage8">8</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage9">9</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage10">10</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage11">11</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage12">12</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage13">13</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage14">14</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage15">15</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage16">16</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage17">17</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage18">18</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage19">19</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoHollywoodPage20">20</Link></li>
    </ul>
    </nav>
    </div>
   </>
  )
}

const  Bollywood =()=> {
    return (
      <>
      <Main/>
   <div className='Main'>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div> <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/logo">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/logo">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/logo">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
    <div className='card'>
    <Link to="/">
    <img className="card-img" src={require("./img/logo.jpg")} alt="" />
    </Link>
    </div>
   </div>
  <nav  aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><Link className='page-link' to="/gotoBollywood">1</Link></li>
    <li className="page-item"><Link className='page-link' to="/gotoBollywoodPage2">2</Link></li>
    <li className="page-item"><Link className='page-link' to="/gotoBollywoodPage3">3</Link></li>
    <li className="page-item"><Link className='page-link' to="/gotoBollywoodPage4">4</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage5">5</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage6">6</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage7">7</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage8">8</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage9">9</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage10">10</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage11">11</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage12">12</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage13">13</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage14">14</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage15">15</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage17">17</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage18">18</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage19">19</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoBollywoodPage20">20</Link></li>
    </ul>
</nav>
        
      </>
    )
}
const  SouthMovie =()=> {
  return (
    <>
    <Main/>
 <div className='Main'>
  <div className='card'>
  <Link to="/Jailer">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div> <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/logo">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/logo">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/logo">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
 </div>
<nav  aria-label="Page navigation example">
<ul className="pagination">
  <li className="page-item"><Link className='page-link' to="/gotoSouthMovie">1</Link></li>
  <li className="page-item"><Link className='page-link' to="/gotoSouthMoviePage2">2</Link></li>
  <li className="page-item"><Link className='page-link' to="/gotoSouthMoviePage3">3</Link></li>
  <li className="page-item"><Link className='page-link' to="/gotoSouthMoviePage4">4</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage5">5</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage6">6</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage7">7</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage8">8</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage9">9</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage10">10</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage11">11</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage12">12</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage13">13</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage14">14</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage15">15</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage17">17</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage18">18</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage19">19</Link></li>
  <li className="page-item"><Link className='page-link'to="/gotoSouthMoviePage20">20</Link></li>
  </ul>
</nav>
      
    </>
  )

}  
const  WebSeries=()=> {
  return (
    <>
    <Main/>
 <div className='Main'>
  <div className='card'>
  <Link to="/serise1">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div> <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/logo">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/logo">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/logo">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
  <div className='card'>
  <Link to="/">
  <img className="card-img" src={require("./img/logo.jpg")} alt="" />
  </Link>
  </div>
 </div>
 <div className='page1' >
  <nav aria-label="Page navigation example">
    <ul className="pagination">
    <li className="page-item"><Link className='page-link' to="/gotoWebSeries">1</Link></li>
    <li className="page-item"><Link className='page-link' to="/gotoWebSeriesPage2">2</Link></li>
    <li className="page-item"><Link className='page-link' to="/gotoWebSeriesPage3">3</Link></li>
    <li className="page-item"><Link className='page-link' to="/gotoWebSeriesPage4">4</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoWebSeriesPage5">5</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoWebSeriesPage6">6</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoWebSeriesPage7">7</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoWebSeriesPage8">8</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoWebSeriesPage9">9</Link></li>
    <li className="page-item"><Link className='page-link'to="/gotoWebSeriesPage10">10</Link></li>
    </ul>
  </nav>
  </div>
      
    </>
  )

}
  
export {Hollywood,Bollywood,SouthMovie,WebSeries}
