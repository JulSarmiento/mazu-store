import React from "react";
import "./index.css";

/**
 * this component create the loading component/
 * 
 * @param {string} 
 * @returns the loading component with the charging message
 */
function Loading({message}){
  return (
    <div className="mx-auto my-auto d-flex justify-content-center align-item-center text-center loading">
      <div>
        <div className="loadingio-spinner-eclipse-k7u9b569ivn"><div className="ldio-yg98p1qt2pm">
        <div></div>
        </div></div>
        <p >{message}</p>
      </div>
    </div>
  )
}


export default Loading;