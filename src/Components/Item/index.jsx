import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css"

/**
 * This is the item's card component * 
 * @param {onject}  
 * @returns the porduct's card component with the object information.
 */
export default function Item({item}){

  const formartter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

  return(
    <Col >
      <Card className="my-3 mx-3 card__shadow" style={{ width: '18rem' }}>
        <Card.Img loading="lazy" variant="top" src={item.picture} className="item-img" />
        <Card.Body>
          <Card.Title className="card__text card__text--title" >{item.line} {item.color }</Card.Title>
          {/* <Card.Text>
            {`Nuestro collar linea ${item.line} cuenta con ${item.stones} de color ${item.color} y un grosor de piedra principal de ${item.type}. `}
          </Card.Text> */}
          <Card.Text className="card__text">
            {formartter.format(parseInt(item.price))}  COP
          </Card.Text>
        </Card.Body>
        <Link to={`/Products/${item.slug}/${item.id}`} className="btn btn-primary">Ver Opciones</Link>
      </Card>
    </Col>

  )
} 