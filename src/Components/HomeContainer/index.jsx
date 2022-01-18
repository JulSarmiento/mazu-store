import React from "react";
import Slider from "../Slider";
import "./index.css";

/**
 * This container is the home page's view
 * 
 * @returns slider's component and the about us section 
 */
export default function HomeContainer(){

  return(
   <>
      <Slider/>

      <div className=" container p-2 gap-3 aboutUs ">
        <img src="https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/logos%20and%20icons%2Fmazu-logo.svg?alt=media&token=8e1741c0-ac41-459a-b81c-c69dca1bab80" className="aboutUs__picture" alt="Logo completo de mazuzoe store" />
        <div className="aboutUs__textContainer">
          <p className="p-3 text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas blanditiis dolores iusto voluptatum tempore incidunt quaerat fuga deleniti magnam itaque cum excepturi, quia consectetur nulla nisi placeat amet velit. Repellendus. lorem.100
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste aspernatur temporibus, incidunt culpa ex, iure doloribus corrupti soluta ea labore facere, quas similique nemo? Provident veritatis aliquam ratione explicabo!
          </p>
        </div>
      </div>
   
   </>

  )
}