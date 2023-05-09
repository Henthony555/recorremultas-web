import React from 'react';
import Rotas from './Rotas';
import MenuSistema from './components/MenuAdm';
import Footer from './components/Footer';


function App() {

  return (

    <div className="App">
      <MenuSistema />
      <Rotas />
      <Footer />
    </div>
  );
}

export default App;
