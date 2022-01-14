import React from "react";
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"

import "./index.css";

/**
 * This component is the category's card
 * 
 * @param {object} 
 * @returns the category in the card
 */
export default function Category({category}) {

  return (
    <Row className="d-flex flex-row align-items-center my-3 px-5 categories" >
      <Col className="categories__textCard">
        <h3 >
          <Link
           to={category.slug?`/Products/${category.slug}`: '/Products'} 
           className="categories__text"
          >
            {category.name}
          </Link>
        </h3>
      </Col>
      <Col className="categories__imageContainer">
        <img className="categories__image" src={category.img} alt="" />
      </Col>
    </Row>
  )
}

 