import React from 'react'
import ReactPlayer from 'react-player'

const HPage1 = () =>{
 return(
    <>
    <img className='img1' src={require("./img/KingdomofThePlanet24.jpg")} alt="" />
    <div>
      <button className='ButtanDownloads'><a className='Buttan' href="https://drive.google.com/file/d/1oX-yDzEnf2Q-TVapiscpueW5ObA7M_7R/view">Watch</a></button>
    </div>
    <div className='informasin'>
      <h3>Kingdom of The Planet</h3>
      <ul>
        <li>Directed by : 	Wes Ball</li>
        <li>Written by	: 	Josh Friedman</li>
        <li>Edited by	: Dan Zimmerman<br/> Dirk Westervelt</li>
        <li>Distributed by : Century Studios </li>
        <li>Release dates :	May 2, 2024</li>
        <li>Qulatiy: 1024 Print </li>
      </ul>
    </div>
    <div className='player'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=SJIOn1VuNOU'
          height={420}
          width={770} 
        />
        <div className='text-Title'>Watch The Full Movie Click The Watch Buttan </div>
    </div>
    <div className='player1'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=UJ4SUZSo8H8'
          height={320}
          width={670} 
        />
        <div className='text-Title'>Watch The Full Movie Click The Watch Buttan </div>
    </div>
    <div className='player2'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=UJ4SUZSo8H8'
          height={220}
          width={400} 
        />
        <div className='text-Title'>Watch The Full Movie Click The Watch Buttan </div>
    </div>
    <div className='player3'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=UJ4SUZSo8H8'
          height={180}
          width={300} 
        />
        <div className='text-Title'>Watch The Full Movie Click The Watch Buttan </div>
    </div>

      
    </>
  )
}
const HPage2 = () =>{
  return(
     <>
     <img className='img1' src={require("./img/GhostRider2.jpg")} alt="" />
     <div>
       <button className='ButtanDownloads'><a href="https://drive.google.com/file/d/1lRHEjbCG6kFKxH2ulRIfhmJYECubKLeC/view">Watch</a></button>
     </div>
     <div className='informasin'>
       <h3>Ghost Rider2</h3>
       <ul>
         <li>Directed by : 	Neveldine/Taylor</li>
         <li>Screenplay by:Scott M. Gimple,Seth Hoffman,David S. Goyer</li>
         <li>Story by	:David S. Goyer</li>
         <li>Distributed by :	Columbia Pictures[2] (through Sony Pictures Releasing[4])</li>
         <li>Release dates :	December 11, 2011 </li>
         <li>Qulatiy: 1024 Print </li>
       </ul>
     </div>
     <div className='player'>
         <ReactPlayer
           className='react-player'
           url='https://www.youtube.com/watch?v=89FaRrGyMZ8'
           height={420}
           width={770} 
         />
         <div className='text-Title'>Watch The Full Movie Click The Watch Buttan </div>
     </div>
 
       
     </>
   )
 }
export {HPage1,HPage2}