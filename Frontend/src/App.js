import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/pages/Inicio';
import Perfil from './components/pages/Perfil.js';
import Footer from './components/footer/Footer';
import AddProducto from './components/addProducto/AddProducto';
import datosProd from './data/productos.json';



function App() {

  // localStorage.setItem("productos",JSON.stringify(datosProd));
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/agregarProducto' element={<AddProducto />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
