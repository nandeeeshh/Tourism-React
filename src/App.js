import { useState } from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import Home from './components/Home';
import data from './database/data';
import Cardcontainer from './components/Cardcontainer';
import Footer from './components/Footer'


function App() {
  return (
   <div className='App'>
   <Header />
   <Home />
   <ToastContainer position='top-right'/>
   <Footer />
   </div>
  )
}



export default App;
