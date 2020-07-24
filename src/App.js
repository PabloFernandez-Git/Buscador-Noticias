import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  // useEffect
  useEffect(() => {
    const consultarAPI = async() => {

      const apiKey = 'bf2ab6c769cc4488b8dd54769ec720e2';
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apiKey}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI()
  }, [categoria]);

  return (
    <Fragment>
        <Header 
          titulo="Buscador de noticias"
        />

        <div className="container white">
          <Formulario 
            guardarCategoria={guardarCategoria}
          />
        </div>
    </Fragment>
  );
}

export default App;
