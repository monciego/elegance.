import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Architects from './pages/Architects';
import News from './pages/News';
import About from './pages/About';
import Lookbook from './pages/Lookbook';
import Explore from './pages/Explore';
import Contact from './pages/Contact';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/architects' element={<Architects />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
          <Route path='/lookbook' element={<Lookbook />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
