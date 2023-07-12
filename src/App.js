import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Rotas from './Rotas';
import Footer from './components/Footer';
import MenuSistema from './components/MenuSistema';



function App() {

  return (

    <div className="App">
      <MenuSistema />
      <Rotas />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
