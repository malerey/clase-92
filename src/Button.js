import React from 'react';

const Formulario = ({titulo, funcionDelPadre}) => {

  const handleChange = e => {
    const loQueEscribioElUsuario = e.target.value
    funcionDelPadre(loQueEscribioElUsuario)
  }

  return (
    <form>
    <button>{titulo}</button>
      <input type="text" onChange={handleChange}></input>
    </form>
  );
};

export default Formulario;
