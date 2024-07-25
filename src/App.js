
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Navbar from './pages/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/favourite' element={<Favourite/>}/>
       <Route path='/recipe-item/:id' element={<Details />} />
     

      </Routes>
    </div>
  );
}

export default App;
