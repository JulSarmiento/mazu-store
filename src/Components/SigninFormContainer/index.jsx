import React from "react";
import {Image} from "react-bootstrap";

import SigninForm from "../SigninForm";



export default function SigninFormContainer(){
  return(
    <section className="container mx-auto p-3 my-5 d-flex justify-content-xl-evenly align-items-center flex-column flex-lg-row ">

      <Image src="https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/dogs%2F5.png?alt=media&token=f4fdb8dd-6e4d-4d9b-80a4-3ad34fd02208" alt="Dibujo de un perrito"  className="fluid login-picture" />
        
      <SigninForm/>

    </section>
    
  )
}