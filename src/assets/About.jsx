import React from 'react'
import { Link } from "react-router-dom"
function About() {
  return (
    <div className='about appear'>
        <section className='left'><div className="left-title">
            <h1>Oblivion</h1>
            </div>
            <div className="left-text">
                <p>Oblivion es la colección de fiesta primavera verano 2023 de la marca Belén Rizzo, está diseñada a partir de los inspiradores diseños de Carolina Rossi</p>
                <p>En esta renovada campaña contamos con diseños tanto masculinos como femeninos, para todo tipo de gustos y eventos, ideales para una noche calurosa o para una tarde soleada.</p>
                <p>El usuario que elige nuestra marca no siempre es el anfitrion pero nosotros siempre queremos que brille.</p>
            </div>
            </section>
        <section className='right'>
            <div></div>
        <Link>Modelos</Link>
        </section>
    </div>
  )
}

export default About