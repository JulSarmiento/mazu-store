import React from "react";
import "./index.css"

export default function Footer() {

  return (
    <footer fixed="bottom" className=" d-flex mt-5 justify-content-between align-items-center flex-column px-5  footer">
      <p className="my-2">By: <a href="https://github.com/JulSarmiento">Julieth Sarmiento</a></p>
      <div className="my-2 d-flex align-items-center gap-3 footer__icons">
        <a href="https://www.linkedin.com/in/julieth-sarmiento/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>        
        <a href="https://github.com/JulSarmiento" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
      </div>
    </footer>
  )
}