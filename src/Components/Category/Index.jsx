import React from "react";
import {Row, Col} from 'react-bootstrap';

import "./index.css"

export default function Category({category}) {

  return (
    <Row className="d-flex flex-row align-items-center my-3 px-5 categories" >
      <Col className="categories__textCard">
        <h3 ><a href={category.url} className="categories__text">{category.name}</a></h3>
      </Col>
      <Col className="categories__imageContainer">
        <img className="categories__image" src={category.img} alt="" />
      </Col>
    </Row>
  )
}

 