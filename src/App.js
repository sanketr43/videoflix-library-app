import './assets/App.css';

import Home from './pages/home/home';
import Explore from './pages/explore/explore';
import Playlist from './pages/playlist/playlist';
import History from './pages/history/history';
import WatchLater from './pages/watch-later/watch-later';
import LikedVideo from './pages/liked-videos/liked-video';

import Navbar from './components/navbar/navabar.component';
import Sidebar from './components/sidebar/sidebar.component';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/history' element={<History />} />
        <Route path='/watch-later' element={<WatchLater />} />
        <Route path='/liked' element={<LikedVideo />} />
      </Routes>
    </>
  );
}

export default App;
