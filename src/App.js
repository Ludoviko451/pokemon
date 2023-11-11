import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Pokemon from './components/pages/Pokemon'; // Asegúrate de importar correctamente el componente Pokemon
import Indexpage from './components/pages/Indexpage';
import Items from './components/pages/Items';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Indexpage />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/items' element={<Items />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
