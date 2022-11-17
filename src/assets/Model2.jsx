import React from 'react'
import { useContext } from "../Context";
function Model2() {
  // APPEAR NEXT FUNCTION
  setTimeout(() => {
    handleSubmit("#next", "/Model-3")
    handleSubmit("#next2", "/Model-3")
    }, 1000);
      // APPEAR NEXT FUNCTION
      const { handleSubmit } = useContext();
  return (
    <div id='container' className='container appear'> <section className='left'><div className="left-title">
    <h1>Franco Mansilla</h1>
    </div>
    <div className="left-text">
        <p>Diseñado en un tul con brillos color azul francia con gemas al tono nuestro diseño estrella se lleva todas las miradas.</p>
        <p>Este chaleco confeccionado y bordado a mano es ideal para asistir a cualquier evento si se quiere vestir elegante, esta prenda sale de la linea de lo anticuado.</p>
        <p>Un traje de 3 piezas usado por la parte masculina desde la antiguedad y le da otra mirada a su atuendo.</p>
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

export default Model2;