import './assets/App.css';
import Home from './pages/home/home';
import Navbar from './components/navbar/navabar.component';
import Sidebar from './components/sidebar/sidebar.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
