import React, { Fragment } from 'react';
import Header from './components/Header';


function App() {
  return (
    <Fragment>
        <Header 
          titulo="Buscador de noticias"
        />

        <div className="container white">
          <h1>Formulario</h1>
        </div>
    </Fragment>
  );
}

export default App;
