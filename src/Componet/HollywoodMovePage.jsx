import React from 'react'
import ReactPlayer from 'react-player'

const Black_Adam = 'http://localhost:3000/Move/Black_Adam.zip'
const Ghost_Rider_2_Spirit_Of_Vengeance = 'http://localhost:3000/Move/Ghost_Rider_2_Spirit_Of_Vengeance.zip'
const Guardians_of_the_Galaxy_Vol_3 = 'http://localhost:3000/Move/Guardians_of_the_Galaxy_Vol_3.zip'
const Project_Legion = 'http://localhost:3000/Move/Project_Legion.zip'
const Eagle_Eye = 'http://localhost:3000/Move/Eagle_Eye.zip'
const Perfect_Nanny = 'http://localhost:3000/Move/Perfect_Nanny.zip'
const A_Hard_Day = 'http://localhost:3000/Move/A_Hard_Day.zip'
const Be_with_You = 'http://localhost:3000/Move/Be_with_You.zip'
const Blame_The_Game = 'http://localhost:3000/Move/Blame_The_Game.zip'
const The_Big_Hit = 'http://localhost:3000/Move/The_Big_Hit.zip'
const Cob_web= 'http://localhost:3000/Move/Cob_web.zip'
const Hit_Man = 'http://localhost:3000/Move/Hit_Man.zip'
const Mafia_Mamma = 'http://localhost:3000/Move/Mafia_Mamma.zip'
const Mean_Girls = 'http://localhost:3000/Move/Mean_Girls.zip'
const Mirror_Mirror = 'http://localhost:3000/Move/Mirror_Mirror.zip'
const Excess_Baggage = 'http://localhost:3000/Move/Excess_Baggage.zip'
const Curse_of_the_Kraken = 'http://localhost:3000/Move/Curse_of_the_Kraken.zip'
const The_Invasion = 'http://localhost:3000/Move/The_Invasion.zip'
const The_Thieves = 'http://localhost:3000/Move/The_Thieves.zip'
const Fierce_Cop= 'http://localhost:3000/Move/Fierce_Cop.zip'
const The_Ghost_And_The_Darkness= 'http://localhost:3000/Move/The_Ghost_And_The_Darkness.zip'
const Lies_Beneath_The_Surface= 'http://localhost:3000/Move/Lies_Beneath_The_Surface.zip'
const Rv_Resurrected_Victims = 'http://localhost:3000/Move/Rv_Resurrected_Victims.zip'
const Kingdom_Of_The_Planet_Of_The_Apes = 'http://localhost:3000/Move/Kingdom_Of_The_Planet_Of_The_Apes.zip'
const Unbreakable = 'http://localhost:3000/Move/Unbreakable.zip'
const Architecture = 'http://localhost:3000/Move/Architecture.zip'
const Along_with_the_Gods_The_Two_Worlds = 'http://localhost:3000/Move/Along_with_the_Gods_The_Two_Worlds.zip'
const The_League_of_Extraordinary_Gentlemen = 'http://localhost:3000/Move/The_League_of_Extraordinary_Gentlemen.zip'
const The_Garfield = 'http://localhost:3000/Move/The_Garfield.zip'


const HPage1 = () =>{
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
    <img className='img1' src={require("./img/BlackAdam1.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Black_Adam)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=UJ4SUZSo8H8'
        />
    </div>
      
    </>
  )
}
const HPage2 =()  =>{

    const DownloadURl=(url)=>{
        const MoveName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("DownloadMovie", MoveName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove(); 
        }
      
      return (
        <>
        <img className='img1' src={require("./img/GhostRider2.jpg")} alt="" />
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
        <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Ghost_Rider_2_Spirit_Of_Vengeance)} }>Downloads</button></div>
        <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=Rwu17kCDug0'
            />
        </div>
          
        </>
      )
}
const HPage3 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/GuaroiansGalaxy3.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Guardians_of_the_Galaxy_Vol_3)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=fRL9UiVp_nk'
        />
    </div>

  </>
  )
}
const HPage4 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/ProjectLegion4.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Project_Legion)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=g0pGATPHNAc&t=9s'
        />
    </div>
      
    </>
  )
}
const HPage5 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/EagleEye5.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Eagle_Eye)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=TyazbMEuyBg&t=5s'
        />
    </div>
      
    </>
  )
}
const HPage6 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/ThePerfectNanny6.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Perfect_Nanny)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ess6c2oTLdU'
        />
    </div>
      
    </>
  )
}
const HPage7 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/AHardDay7.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(A_Hard_Day)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=1ahjBWd6FWg&t=22s'
        />
    </div>
      
    </>
  )
}
const HPage8 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/BeWithYou8.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Be_with_You)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=_6tJmGxGaK4'
        />
    </div>
      
    </>
  )
}
const HPage9 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/BlameTheGame9.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Blame_The_Game)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=hip15g4gies'
        />
    </div>
      
    </>
  )
}
const HPage10 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/Thelnavasin10.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(The_Invasion)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=QsmgZYdZcIE'
        />
    </div>
      
    </>
  )
}
const HPage11 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/CobWeb11.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Cob_web)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=M1tgjXWqR0A'
        />
    </div>
      
    </>
  )
}
const HPage12 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/TheBigHit12.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(The_Big_Hit)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=L29SqAybpQs'
        />
    </div>
      
    </>
  )
}
const HPage13 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/HitMan13.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Hit_Man)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=6nRt6cy6dRQ'
        />
    </div>
      
    </>
  )
}
const HPage14 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/MafiaMamma14.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Mafia_Mamma)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=e2UNT1pLP6g&t=46s'
        />
    </div>
      
    </>
  )
}
const HPage15 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/MeanGirls15.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Mean_Girls)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=AkgUt0Ddl4s&t=10s'
        />
    </div>
      
    </>
  )
}
const HPage16 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/MirrorMirror16.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Mirror_Mirror)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ILDeA7AqA84'
        />
    </div>
      
    </>
  )
}
const HPage17 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/ExcessBaggage17.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Excess_Baggage)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=kdOr9Zq5uk4'
        />
    </div>
      
    </>
  )
}
const HPage18 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/CurseofTheKraken18.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Curse_of_the_Kraken)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=fPccK01zvAs'
        />
    </div>
      
    </>
  )
}
const HPage19 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/TheThieves19.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(The_Thieves)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=-TrCrxKimoY'
        />
    </div>
      
    </>
  )
}
const HPage20 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/FierceCop20.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Fierce_Cop)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=EmybM_lwkKI'
        />
    </div>
      
    </>
  )
}
const HPage21 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/TheGhostAndTheDarkness21.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(The_Ghost_And_The_Darkness)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=jGsiY-2CkPU'
        />
    </div>
      
    </>
  )
}
const HPage22 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/LiesBeneathTheSurface22.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Lies_Beneath_The_Surface)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=j_bpFleB2yM'
        />
    </div>
      
    </>
  )
}
const HPage23 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/RvResurrectedVictims23.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Rv_Resurrected_Victims)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=yF7V6rnMfYY'
        />
    </div>
      
    </>
  )
}
const HPage24 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/KingdomofThePlanet24.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Kingdom_Of_The_Planet_Of_The_Apes)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=SJIOn1VuNOU'
        />
    </div>
      
    </>
  ) 
}
const HPage25 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/Unbreakable25.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Unbreakable)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=O3kaNUEX0qI'
        />
    </div>
      
    </>
  )
}
const HPage26 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/Architecture26.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Architecture)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=S9ciarWht4Y'
        />
    </div>
      
    </>
  )
}
const HPage27 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/AlongWithTheGods27.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(Along_with_the_Gods_The_Two_Worlds)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=Y3xcJor-hyQ'
        />
    </div>
      
    </>
  )
}
const HPage28 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/The League of Extraordinary Gentlemen28.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(The_League_of_Extraordinary_Gentlemen)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=fndHh-SEDe0'
        />
    </div>
      
    </>
  )
}
const HPage29 = () =>{
  const DownloadURl=(url)=>{
    const MoveName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("DownloadMovie", MoveName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
    }
  
  return (
    <>
    <img className='img1' src={require("./img/TheGarfield29.jpg")} alt="" />
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
    <div><button className='ButtanDownloads'onClick={()=>{DownloadURl(The_Garfield)} }>Downloads</button></div>
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=j92YpXGnNi0'
        />
    </div>
      
    </>
  )
}



export {HPage1,HPage2,HPage3,HPage4,HPage5,HPage6,HPage7,HPage8,HPage9,HPage10,HPage11,HPage12,HPage13,HPage14,HPage15,HPage16,HPage17,HPage18,HPage19,HPage20,HPage21,HPage22,HPage23,HPage24,HPage25,HPage26,HPage27,HPage28,HPage29}