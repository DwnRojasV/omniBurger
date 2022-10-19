import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/pages/Inicio';
import Pokemon from './components/pages/Pokemon';
import Items from './components/pages/Items';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/carrito' element={<Items />}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
