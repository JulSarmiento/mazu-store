import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/index";

export default function Item({item}){

  const [Counter, setCounter] = React.useState(1);

  const onAdd = (value) => {
    setCounter(Counter + value) 
  };

  const addToCart = () => {
   
    alert(`Agregaste ${Counter} de ${item.line} ${item.color} al carrito. `);
    setCounter(0);
  }

  return(
    <Col >
      <Card className="my-3 mx-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.picture} />
        <Card.Body>
          <Card.Title>{item.line} {item.color}</Card.Title>
          <Card.Text>
            {`Nuestro collar linea ${item.line} cuenta con ${item.stones} de color ${item.color} y un grosor de piedra principal de ${item.type}. `}
          </Card.Text>
          <Card.Text>
            $ {item.price} COP
          </Card.Text>
          <ItemCount stock={item.stock} initial={Counter} onAdd={onAdd}/>
        </Card.Body>
        <Button onClick={addToCart}>Añadir al carrito</Button>
      </Card>
    </Col>

  )
} 