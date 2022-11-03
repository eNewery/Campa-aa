import React from 'react'
import { Link, useNavigate } from "react-router-dom"
function Home() {
const navigate = useNavigate();


setTimeout(() => {
    const home = document.getElementById("home");
    if (home) {
        const next = document.querySelector("#next");
        home.classList.remove("appear")
    next.addEventListener("click", () => {
        home.classList.add("dissappear")
        setTimeout(
            () => {
           navigate("/About")
            }, 1000) 
    })
   
}
}, 1000)




  return (
    <div id='home' className='home appear'>
<div className="home-title">
<h1>Oblivion</h1>
<h4>Inspired by Carolina Rossi</h4>
</div>
<div className='home-subtitle'>
<button id='next' to="/About">Ver más</button>
</div>
    </div>
  )
}

export default Home;