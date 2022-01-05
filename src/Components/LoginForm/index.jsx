import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";

import "./index.css"
export default function LoginForm(){
  return (
    <form className=" mx-auto" >

      <h2 className="tittle my-3 text-center">Iniciar Sesion</h2>

      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Correo Electronico"
          className="mb-3 input--mod"
        >
          <Form.Control type="email" placeholder="Correo electronico" />
          <Form.Text className="text-muted p-2">
            Jamas compartiremos tu correo con nadie mas.
          </Form.Text>
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
            <Form.Check type="checkbox" label="Recordarme"/>
          </Form.Group>

        </FloatingLabel>

      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>

    </form>
  )
}