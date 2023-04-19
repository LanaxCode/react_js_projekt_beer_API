import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import BeerDetailsRandom from './components/BeerDetailsRandom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beerlist' element={<BeerList />} />
        <Route path='/:details' element={<BeerDetails />} />
        <Route path='/randombeer' element={<BeerDetailsRandom />} />
      </Routes>
    </div>
  );
}

export default App;
