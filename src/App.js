import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='content'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
