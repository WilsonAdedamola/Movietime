
import './App.css';
import Cont from './Cont'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import RightSideBar from './components/RightSideBar/RightSideBar';
import Movies from './components/Movies/Movies';
// import All from './components/All/All';
import Series from './components/Series/Series';
import TvShows from './components/TvShows/TvShows';
import Animations from './components/Animations/Animations';
import MobileHeader from './components/MobileHeader/MobileHeader';

function App() {

  return (
    <>
      <div className="d-flex">
        <LeftSideBar />
        <div className='main'>
          <div className='navi'><Navigation /></div>
          <div className='mobileheader'> <MobileHeader /> </div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            {/* <Route path='/all' element={<All />}></Route> */}
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/series' element={<Series />}></Route>
            <Route path='/animations' element={<Animations />}></Route>
            <Route path='/tvshows' element={<TvShows />}></Route>
          </Routes>
        </div>
        <RightSideBar />
      </div>

    </>
  );
}

export default App;
