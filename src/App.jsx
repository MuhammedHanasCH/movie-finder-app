import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Movielist from './components/Movielist'
import Footer from './components/Footer'
import About from './components/About'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <SearchBar onSearch={(query) => console.log(query)} />  {/* Add SearchBar */}
        <Routes>
          <Route path="/" element={<Movielist />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
