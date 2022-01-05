import React from "react";
import {Image} from "react-bootstrap"

import "./index.css"
import LoginForm from "../LoginForm";

export default function LoginFormContainer() {
  return (
    <section className="container mx-auto p-3 my-5 d-flex justify-content-xl-evenly align-items-center flex-column flex-lg-row ">

      <Image src="https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/dogs%2F3.png?alt=media&token=da7cc15f-441a-4486-972e-3b9fb15ec2f4" alt="Dibujo de un perrito"  className="fluid login-picture" />
        
      <LoginForm/>

    </section>
    
  )
}