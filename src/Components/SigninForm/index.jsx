import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";

import "./index.css"

export default function SigninForm(){
  return(
    <form className=" mx-auto" >

      <h2 className="tittle my-3 text-center">Nuevo Usuario</h2>

      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Nombre Completo"
          className="mb-3 input--mod"
        >
          <Form.Control type="text" placeholder="Nombre Completo" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Edad"
          className="mb-3 input--mod"
        >
          <Form.Control type="number" placeholder="edad" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Correo Electronico"
          className="mb-3 input--mod"
        >
          <Form.Control type="email" placeholder="Correo electronico" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Confirmar Correo Electronico"
          className="mb-3 input--mod"
        >
          <Form.Control type="email" placeholder="Correo electronico" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Contraseña"
          className="mb-3 input--mod"
        >
          <Form.Control type="password" placeholder="Contraseña" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Confirmar Contraseña"
          className="mb-3 input--mod"
        >
          <Form.Control type="password" placeholder="Contraseña" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className=" mb-3" controlId="formBasicPassword">

        <FloatingLabel 
          controlId="floatingPassword" 
          label="Contraseña"
          className="mb-3 input--mod"
        >
          <Form.Control type="password" placeholder="Contraseña" />
          
          <Form.Group className="my-3 p-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Aceptar terminos y condiciones"/>
          </Form.Group>

        </FloatingLabel>

      </Form.Group>

      <div className="d-flex justify-content-center align-items-center flex-row gap-5">

        <Button variant="primary" type="reset" >
          Borrar
        </Button>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </div>

    </form>
  )
}