import React from 'react'
import { useContext } from "../Context";
function Model3() {
  // APPEAR NEXT FUNCTION
  setTimeout(() => {
    handleSubmit("#next", "/Model-4")
    handleSubmit("#next2", "/Model-4")
    }, 1000);
      // APPEAR NEXT FUNCTION
      const { handleSubmit } = useContext();
  return (
    <div id='container' className='container appear'> <section className='left'><div className="left-title">
    <h1>Fátima Lihuen</h1>
    </div>
    <div className="left-text">
        <p>Elaborado en un tul blanco con brillos dorados y bordado a mano con gemas doradas, nuestro diseño pensado para quinceañeras te hace brillar y resaltar como ninguna.</p>
        <p>Confeccionado para que nuestra cumpleañera pase su fiesta hermosa y despreocupada, este increíble diseño de 2 piezas se aleja del clásico vestido de tul y lentejulas.</p>
        <p>Para convertirse en algo mucho mas moderno, comodo lindo y divertido. Pasa tu noche soñada de la mejor manera.</p>
    </div>
    <button className="btn btn-2" id="next2">
          Siguiente
        </button>
    </section>
<section className='right'>
<div className='div-img'></div>
<button className='btn' id='next'>Siguiente</button>
</section></div>
  )
}

export default Model3;