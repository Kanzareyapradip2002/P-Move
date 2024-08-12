import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import { HPage1, HPage10, HPage11, HPage12, HPage13, HPage14, HPage15, HPage16, HPage17, HPage18, HPage19, HPage2, HPage20, HPage21, HPage22, HPage23, HPage24, HPage25, HPage26, HPage3, HPage4, HPage5, HPage6, HPage7,HPage8,HPage9} from './Componet/HollywoodMovePage';
import { Login} from './Componet/LoginALLFiles';
import { HollywoodPage10, HollywoodPage11, HollywoodPage12, HollywoodPage13, HollywoodPage14, HollywoodPage15, HollywoodPage16, HollywoodPage17, HollywoodPage18, HollywoodPage19, HollywoodPage2, HollywoodPage20, HollywoodPage3, HollywoodPage4, HollywoodPage5, HollywoodPage6, HollywoodPage7, HollywoodPage8, HollywoodPage9} from './Componet/HollywoodPage';
import { Bollywood, Hollywood, SouthMovie,WebSeries } from './Componet/MovieCatgares';
import { BollywoodPage10, BollywoodPage11, BollywoodPage12, BollywoodPage13, BollywoodPage14, BollywoodPage15, BollywoodPage16, BollywoodPage17, BollywoodPage18, BollywoodPage19, BollywoodPage2, BollywoodPage20, BollywoodPage3, BollywoodPage4, BollywoodPage5, BollywoodPage6, BollywoodPage7, BollywoodPage8, BollywoodPage9 } from './Componet/BollywoodPage';
import { SouthMoviePage10, SouthMoviePage11, SouthMoviePage12, SouthMoviePage13, SouthMoviePage14, SouthMoviePage15, SouthMoviePage16, SouthMoviePage17, SouthMoviePage18, SouthMoviePage19, SouthMoviePage2, SouthMoviePage20, SouthMoviePage3, SouthMoviePage4, SouthMoviePage5, SouthMoviePage6, SouthMoviePage7, SouthMoviePage8, SouthMoviePage9 } from './Componet/SouthMovieMain';
import { WebSeriesMoviePage10, WebSeriesMoviePage2, WebSeriesMoviePage3, WebSeriesMoviePage4, WebSeriesMoviePage5, WebSeriesMoviePage6, WebSeriesMoviePage7, WebSeriesMoviePage8, WebSeriesMoviePage9 } from './Componet/WebSeriesMovie';
import { Serise1 } from './Componet/WebSeriesMovieSeason';
import { Season1 } from './Componet/WebSeriesMovieSeasonPage';
import './Style.css';

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/gotoHollywood' element={<Hollywood/>}></Route>
      <Route path='/gotoBollywood' element={<Bollywood/>}></Route>
      <Route path='/gotoSouthMovie' element={<SouthMovie/>}></Route>
      <Route path='/gotoWebSeries' element={<WebSeries/>}></Route>
      <Route path='/gotoHollywoodPage2' element={<HollywoodPage2/>}></Route>
      <Route path='/gotoHollywoodPage3' element={<HollywoodPage3/>}></Route>
      <Route path='/gotoHollywoodPage4' element={<HollywoodPage4/>}></Route>
      <Route path='/gotoHollywoodPage5' element={<HollywoodPage5/>}></Route>
      <Route path='/gotoHollywoodPage6' element={<HollywoodPage6/>}></Route>
      <Route path='/gotoHollywoodPage7' element={<HollywoodPage7/>}></Route>
      <Route path='/gotoHollywoodPage8' element={<HollywoodPage8/>}></Route>
      <Route path='/gotoHollywoodPage9' element={<HollywoodPage9/>}></Route>
      <Route path='/gotoHollywoodPage10' element={<HollywoodPage10/>}></Route>
      <Route path='/gotoHollywoodPage11' element={<HollywoodPage11/>}></Route>
      <Route path='/gotoHollywoodPage12' element={<HollywoodPage12/>}></Route>
      <Route path='/gotoHollywoodPage13' element={<HollywoodPage13/>}></Route>
      <Route path='/gotoHollywoodPage14' element={<HollywoodPage14/>}></Route>
      <Route path='/gotoHollywoodPage15' element={<HollywoodPage15/>}></Route>
      <Route path='/gotoHollywoodPage16' element={<HollywoodPage16/>}></Route>
      <Route path='/gotoHollywoodPage17' element={<HollywoodPage17/>}></Route>
      <Route path='/gotoHollywoodPage18' element={<HollywoodPage18/>}></Route>
      <Route path='/gotoHollywoodPage19' element={<HollywoodPage19/>}></Route>
      <Route path='/gotoHollywoodPage20' element={<HollywoodPage20/>}></Route>
      \\---------------------------------------------------------------------\\
      <Route path='/gotoBollywoodPage2' element={<BollywoodPage2/>}></Route>
      <Route path='/gotoBollywoodPage3' element={<BollywoodPage3/>}></Route>
      <Route path='/gotoBollywoodPage4' element={<BollywoodPage4/>}></Route>
      <Route path='/gotoBollywoodPage5' element={<BollywoodPage5/>}></Route>
      <Route path='/gotoBollywoodPage6' element={<BollywoodPage6/>}></Route>
      <Route path='/gotoBollywoodPage7' element={<BollywoodPage7/>}></Route>
      <Route path='/gotoBollywoodPage8' element={<BollywoodPage8/>}></Route>
      <Route path='/gotoBollywoodPage9' element={<BollywoodPage9/>}></Route>
      <Route path='/gotoBollywoodPage10' element={<BollywoodPage10/>}></Route>
      <Route path='/gotoBollywoodPage11' element={<BollywoodPage11/>}></Route>
      <Route path='/gotoBollywoodPage12' element={<BollywoodPage12/>}></Route>
      <Route path='/gotoBollywoodPage13' element={<BollywoodPage13/>}></Route>
      <Route path='/gotoBollywoodPage14' element={<BollywoodPage14/>}></Route>
      <Route path='/gotoBollywoodPage15' element={<BollywoodPage15/>}></Route>
      <Route path='/gotoBollywoodPage16' element={<BollywoodPage16/>}></Route>
      <Route path='/gotoBollywoodPage17' element={<BollywoodPage17/>}></Route>
      <Route path='/gotoBollywoodPage18' element={<BollywoodPage18/>}></Route>
      <Route path='/gotoBollywoodPage19' element={<BollywoodPage19/>}></Route>
      <Route path='/gotoBollywoodPage20' element={<BollywoodPage20/>}></Route>
      \\---------------------------------------------------------------------\\
      <Route path='/gotoSouthMoviePage2' element={<SouthMoviePage2/>}></Route>
      <Route path='/gotoSouthMoviePage3' element={<SouthMoviePage3/>}></Route>
      <Route path='/gotoSouthMoviePage4' element={<SouthMoviePage4/>}></Route>
      <Route path='/gotoSouthMoviePage5' element={<SouthMoviePage5/>}></Route>
      <Route path='/gotoSouthMoviePage6' element={<SouthMoviePage6/>}></Route>
      <Route path='/gotoSouthMoviePage7' element={<SouthMoviePage7/>}></Route>
      <Route path='/gotoSouthMoviePage8' element={<SouthMoviePage8/>}></Route>
      <Route path='/gotoSouthMoviePage9' element={<SouthMoviePage9/>}></Route>
      <Route path='/gotoSouthMoviePage10' element={<SouthMoviePage10/>}></Route>
      <Route path='/gotoSouthMoviePage11' element={<SouthMoviePage11/>}></Route>
      <Route path='/gotoSouthMoviePage12' element={<SouthMoviePage12/>}></Route>
      <Route path='/gotoSouthMoviePage13' element={<SouthMoviePage13/>}></Route>
      <Route path='/gotoSouthMoviePage14' element={<SouthMoviePage14/>}></Route>
      <Route path='/gotoSouthMoviePage15' element={<SouthMoviePage15/>}></Route>
      <Route path='/gotoSouthMoviePage16' element={<SouthMoviePage16/>}></Route>
      <Route path='/gotoSouthMoviePage17' element={<SouthMoviePage17/>}></Route>
      <Route path='/gotoSouthMoviePage18' element={<SouthMoviePage18/>}></Route>
      <Route path='/gotoSouthMoviePage19' element={<SouthMoviePage19/>}></Route>
      <Route path='/gotoSouthMoviePage20' element={<SouthMoviePage20/>}></Route>
      \\-----------------------------------------------------------------------\\
      <Route path='/gotoWebSeriesPage2' element={<WebSeriesMoviePage2/>}></Route>
      <Route path='/gotoWebSeriesPage3' element={<WebSeriesMoviePage3/>}></Route>
      <Route path='/gotoWebSeriesPage4' element={<WebSeriesMoviePage4/>}></Route>
      <Route path='/gotoWebSeriesPage5' element={<WebSeriesMoviePage5/>}></Route>
      <Route path='/gotoWebSeriesPage6' element={<WebSeriesMoviePage6/>}></Route>
      <Route path='/gotoWebSeriesPage7' element={<WebSeriesMoviePage7/>}></Route>
      <Route path='/gotoWebSeriesPage8' element={<WebSeriesMoviePage8/>}></Route>
      <Route path='/gotoWebSeriesPage9' element={<WebSeriesMoviePage9/>}></Route>
      <Route path='/gotoWebSeriesPage10' element={<WebSeriesMoviePage10/>}></Route>
      <Route path='/serise1' element={<Serise1/>}></Route>
      <Route path='/Season1' element={<Season1/>}></Route>
      <Route path='/KingdomofThePlanet' element={<HPage1/>}></Route>
      <Route path='/GhostRider' element={<HPage2/>}></Route>
      <Route path='/JohnnyEnglishStrikesAgain' element={<HPage3/>}></Route>
      <Route path='/drunkenmaster' element={<HPage4/>}></Route>
      <Route path='/FastFuriousPresentsHobbsShaw' element={<HPage5/>}></Route>
      <Route path='/JackHunterandtheQuestforAkhenatensTomb' element={<HPage6/>}></Route>
      <Route path='/Snitch' element={<HPage7/>}></Route>
      <Route path='/AHardDay' element={<HPage8/>}></Route>
      <Route path='/Architecture' element={<HPage9/>}></Route>
      <Route path='/RvResurrectedVictims' element={<HPage10/>}></Route>
      <Route path='/ProjectLegion' element={<HPage11/>}></Route>
      <Route path='/ThePerfectNanny' element={<HPage12/>}></Route>
      <Route path='/MirrorMirror' element={<HPage13/>}></Route>
      <Route path='/MeanGirls' element={<HPage14/>}></Route>
      <Route path='/MafiaMamma' element={<HPage15/>}></Route>
      <Route path='/LiesBeneathTheSurface' element={<HPage16/>}></Route>
      <Route path='/HitMan' element={<HPage17/>}></Route>
      <Route path='/GuaroiansGalaxy' element={<HPage18/>}></Route>
      <Route path='/ExcessBaggage' element={<HPage19/>}></Route>
      <Route path='/FierceCop' element={<HPage20/>}></Route>
      <Route path='/CurseofTheKraken' element={<HPage21/>}></Route>
      <Route path='/EagleEye' element={<HPage22/>}></Route>
      <Route path='/BlameTheGame' element={<HPage23/>}></Route>
      <Route path='/CobWeb' element={<HPage24/>}></Route>
      <Route path='/AlongWithTheGods' element={<HPage25/>}></Route>
      <Route path='/BeWithYou' element={<HPage26/>}></Route>
    </Routes>

    </>
  );
}

export default App;
