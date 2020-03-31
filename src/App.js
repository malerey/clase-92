import React, {useState} from 'react';
import Formulario from './Button';

const App = () => {
  const [titulo, setTitulo] = useState('')

  const funcionDelPadre = informacionDelHijo => {
    console.log(informacionDelHijo)

    setTitulo(informacionDelHijo)
  }

  return(
    <div>
    <h1>{titulo}</h1>
      <Formulario titulo={titulo} funcionDelPadre={funcionDelPadre}/>
    </div>
  );
}

export default App;





