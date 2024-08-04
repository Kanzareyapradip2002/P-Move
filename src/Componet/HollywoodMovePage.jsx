import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const HPage1 = () =>{
 return(
    <>
    <img className='img1' src={require("./img/BlackAdam1.jpg")} alt="" />
    <div>
    <Link to='/Movie1' >
      <button className='ButtanDownloads'>Watch</button>
    </Link>
    </div>
    <div className='player-wrapper'>
      
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=UJ4SUZSo8H8'
          
        />
        <div className='text-Title'>Watch The Full Movie Click The Watch Buttan </div>
    </div>

      
    </>
  )
}
export {HPage1}