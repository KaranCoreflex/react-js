import './App.scss';
import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/:imdbID' element={<MovieDetails/>} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
