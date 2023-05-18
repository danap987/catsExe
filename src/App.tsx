import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Main from './Components/Layout/Main/Main';
import Menu from './Components/Layout/Menu/Menu';
import Footer from './Components/Layout/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Menu/>
     <Main/>
     <Footer/> 
    
    </div>
  );
}

export default App;
