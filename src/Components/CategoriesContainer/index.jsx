import React from "react";

import CategoriesList from "../CategoriesList";

import Loading from "../Loading";
import { Row } from "react-bootstrap";
import useCollection from "../../Hooks/DocumentsHook";


/**
 * This component mangae the api information for the product's category
 * @returns categories mapped.
 */
export default function CategoriesContainer() {
  const {isLoading, items} = useCollection('Categories');

  if(isLoading){
    return (
      <Row className="loading-container">
        <Loading message={'Cargando Categorias'}  />
      </Row>
    )
  }
  return (
    <>
      <Row className='container d-flex flex-row justify-content-center align-items-center mx-auto my-5'>
        <h2 className='my-5' > CATEGORIAS </h2>
        <CategoriesList categories={items.sort( (a, b) => a.order > b.order)}/>
      </Row>
    </>

  )
}