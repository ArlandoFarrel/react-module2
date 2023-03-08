import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Karya from './Components/Karya'
import Contact from './Components/Contact'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Karya' element={<Karya />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
