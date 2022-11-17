import React, { createContext } from "react";
import { useNavigate } from "react-router-dom"
export const CartContext = createContext([])
export const useContext = () => React.useContext(CartContext)

const Provider = ({children}) => {
  const navigate = useNavigate();
  function handleSubmit (nexts, navigates) {
      setTimeout(() => {
        const home = document.getElementById("container");
        if (home) {
          const next = document.querySelector(nexts);
          home.classList.remove("appear");
          next.addEventListener("click", () => {
            home.classList.add("dissappear");
            setTimeout(() => {
              navigate(navigates);
            }, 1000);
          });
        }
      }, 1000);
    }

    return(
      <CartContext.Provider value={{
handleSubmit
      }}>
      {children}
      </CartContext.Provider>
          )
}

export default Provider