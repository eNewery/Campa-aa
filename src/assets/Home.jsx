import React from 'react'
import { useContext } from "../Context"
function Home() {
  const { handleSubmit } = useContext();
  // APPEAR NEXT FUNCTION
  setTimeout(() => {
    handleSubmit("#next", "/About")
    handleSubmit("#next2", "/About")
    }, 1000);
      // APPEAR NEXT FUNCTION




  return (
    <div id='container' className='home appear'>
<div className="home-title">
<h1>Oblivion</h1>
<h4>Inspired by Carolina Rossi</h4>
</div>
<div className='home-subtitle'>
<button className='btn' id='next' to="/About">Ver más</button>
</div>
    </div>
  )
}

export default Home;