import React from 'react'
import ReactPlayer from 'react-player'


const Season1 = () =>{
    const DownloadURl=(url)=>{
        const MoveName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("DownloadMovie", MoveName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove(); 
    }
 return(
    <>
    <img className='img1' src={require("./img/logo.jpg")} alt="" />
    <div className='DownloadsSystem'>
    <ul>
      <h1>Downloads System</h1>
      <br/>
      <li>*Laptop Downloads*</li>
      <li>Watch The Movie Trailer And Likeat The Movie And  Downloads The Movie. </li>
      <li>Stap:1 Click The Download Button And Download This Zip File <img className='zipFile' src={require("./img/zipFile.png")} alt="" /> </li>
      <li>Stap:2 Opne The Downloaded Zip File Folder. </li>
      <li>Stap:3 Click The Extract All Button.</li>
      <li>Stap:4 Click The Browse.. Button And Set The Folder </li>
      <li>Stap:5 Click The Extract Button And Comaplit This Download Movie </li>
      <br/>
      <li>* Phone Download*</li>
      <li>Watch The Movie Trailer And Likeat The Movie And  Downloads The Movie.</li>
      <li>Stap:1 Click The Download Button And Download This Zip File <img className='zipFile' src={require("./img/zipFile.png")} alt="" /></li>
      <li>Stap:2 Download The Any Zip Extract App</li>
      <li>Stap:3 And Zip Extract And Enjoya The Movie</li>

    </ul>

    </div>
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl()} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=a0Ouzf0bfpE'
        />
    </div>
      
    </>
  )
}
 
export {Season1,}
