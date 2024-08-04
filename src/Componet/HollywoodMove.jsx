import React from 'react'
import ReactPlayer from 'react-player'

const HMovie1 = () =>{
 return(
    <>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player1'
          url='https://firebasestorage.googleapis.com/v0/b/p-movie-b4834.appspot.com/o/Black%20Adam%202022%20BluRay%20720p%20Hindi%20English%20AAC%205.1%20x264%20ESub%20-%20mkvCinemas.mkv?alt=media&token=3853357f-efb3-4fc4-9481-6d7d5c0f6d92'
          height={auto}
          width={auto}
          controls
        />
    </div>

      
    </>
  )
}
const HMovie2 = () =>{
  return(
     <>
     <div className='player-wrapper'>
         <ReactPlayer
           className='react-player1'
           url='https://firebasestorage.googleapis.com/v0/b/p-movie-b4834.appspot.com/o/Ghost%20Rider%202%20Spirit%20Of%20Vengeance%202011%20BluRay%20720p%20Hindi%20English%20AAC%205.1%20x264%20ESub%20-%20mkvCinemas%20%5BTelly%5D.mkv?alt=media&token=0cc609ed-6e0d-4049-8e66-c592dcdea994'
           height={auto}
           width={auto}
           controls
         />
     </div>
 
       
     </>
   )
 }
export {HMovie1,HMovie2}