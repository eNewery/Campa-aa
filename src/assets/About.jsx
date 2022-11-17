import React from 'react'
import { useContext } from "../Context";
function About() {
  // APPEAR NEXT FUNCTION
  setTimeout(() => {
    handleSubmit("#next", "/Model-1")
    handleSubmit("#next2", "/Model-1")
    }, 1000);
      // APPEAR NEXT FUNCTION
      const { handleSubmit } = useContext();

  return (
    <div id='container' className='container appear'>
        <section className='left'><div className="left-title">
            <h1>Oblivion</h1>
            </div>
            <div className="left-text">
                <p>Oblivion es la colección de fiesta primavera verano 2023 de la marca Belén Rizzo, está diseñada a partir de los inspiradores diseños de Carolina Rossi</p>
                <p>En esta renovada campaña contamos con diseños tanto masculinos como femeninos, para todo tipo de gustos y eventos, ideales para una noche calurosa o para una tarde soleada.</p>
                <p>El usuario que elige nuestra marca no siempre es el anfitrion pero nosotros siempre queremos que brille.</p>
            </div>
            <button className="btn btn-2" id="next2">
          Siguiente
        </button>
            </section>
        <section className='right'>
        <div className='div-img'></div>
        <button className='btn' id='next'>Modelos</button>
        </section>
    </div>
  )
}

export default About