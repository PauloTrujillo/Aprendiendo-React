import React, { Component } from "react";

//Clase del componente
class MiComponente extends Component {
  /**
   * Render del componente
   */
  render() {
    let receta = {
      nombre: 'Pizza', 
      ingredientes: ['Queso Cabra', 'Tomate horneado', 'Prochuto'],
      Calorias: '8 millones'
    }
    return (
      <div className='mi-componente'>
        <p>{'Receta: ' + receta.nombre}</p>
        <p>{'Calorias: ' + receta.Calorias}</p>
        <p>Ingredientes:</p>
        <ol>
          {
            receta.ingredientes.map((ingrediente, i) => {
              console.log(ingrediente);
              return (
                <li key={i}>
                  {ingrediente}
                </li>
              );
            })
          }
        </ol>
        <hr/>
      </div>
    );
  }
}

export default MiComponente;
