import React from "react";
import { Button } from "react-bootstrap";

export default function AddToCart(){
  const addCart = () => {
    alert(`Producto agreado al carrito`);
  }

  return <Button onClick={addCart}>Agregar al carrito</Button>
}