import Flexibility from './pages/flexibility';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Home/>} />
          <Route exact path='/flexibility' element={<Flexibility/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
