import React from "react";
import { useContext } from "../Context";
function Model1() {
  // APPEAR NEXT FUNCTION
setTimeout(() => {
handleSubmit("#next", "/Model-2")
handleSubmit("#next2", "/Model-2")
}, 1000);
  // APPEAR NEXT FUNCTION
  const { handleSubmit } = useContext();
  return (
    <div id="container" className="container appear">
      <section className="left">
        <div className="left-title">
          <h1>Agustina Torres</h1>
        </div>
        <div className="left-text">
          <p>
          Confeccionado en un tul con brillos color burdeos clairet y bordado a mano con gemas al tono nuestro diseño ideado para egresadas e invitadas.
          </p>
          <p>
          Este vestido tiene la parte superior  transparente con el busto cubierto por un saten artificial pesado de alta calidad.
          </p>
          <p>
          Este diseño es ideal para sentirte comoda y brillar en tu noche tan esperada.
          </p>
        </div>
        <button className="btn btn-2" id="next2">
          Siguiente
        </button>
      </section>
      <section className="right">
      <div className='div-img'></div>
        <button className="btn" id="next">
          Siguiente
        </button>
      </section>
    </div>
  );
}

export default Model1;
