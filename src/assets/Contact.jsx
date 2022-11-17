import React from 'react'
import logo from "./images/1161953_instagram_icon(3).png"
function Contact() {
  return (
    <div id='container' className='container appear'> <section className='left'><div className="left-title">
    <h1>Redes de Contacto</h1>

    </div>
    <div className="left-text">
      <div className='rrss'>
        <img src={logo} alt="" />
        <a href='#'>HG Models</a>
      </div>
        <div className='rrss'>
        <img src={logo} alt="" />
        <a href='#'>Carolina Rossi</a>
        </div>
        <div className='rrss'>
        <img src={logo} alt="" />
        <a href='#'>Oblivion</a>
        </div>
    </div>
    </section>
<section className='right right-contact'>
  <form action="">
    <div className='contact-title'><h1>Formulario</h1></div>
<div className="inputs-form">

  <input id='nombre' placeholder=' ' type="text" />
  <label htmlFor="nombre">Nombre  </label>
  

  <input id='email' type="text" placeholder=' ' />
  <label htmlFor="email">E-Mail  </label>

  <input id='celular' placeholder=' ' type="text" />
  <label htmlFor="celular">Celular</label>

<textarea name="" id="mensaje" placeholder=' ' cols="30" rows="10"></textarea>

<label htmlFor="mensaje">Mensaje</label>
</div>
<button className='btn'>Enviar</button>
  </form>


</section></div>
  )
}

export default Contact