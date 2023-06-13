import React from 'react';
import Rotas from './Rotas';
import Footer from './components/Footer';
import MenuSistema from './components/MenuSistema';


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
