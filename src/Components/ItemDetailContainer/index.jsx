import React from "react";
import {useParams} from "react-router-dom";
import { Row } from "react-bootstrap";

import Loading from "../Loading";
import ItemDetail from "../ItemDetail";
import useDocument from "../../Hooks/DocumentHook";

/**
 * This component manage the view and the call for the api mock information. 
 * 
 * @returns the found object in the items array.
 */
export default function ItemDetailContainer() {
  const {colId} = useParams();

  const {isLoading, document} = useDocument('Products', colId);

  if(isLoading){
    return(
      <Row className="loading-container">
        <Loading message={'Cargando detalles del producto'}  />
      </Row>
    )
  }

  if (!document) {
    return <Row className="loading-container">no existe el producto #{colId}</Row>
  }

  return(
    <Row className=' container d-flex flex-row mx-auto'>
      <h2 className='my-5' >PRODUCTOS</h2>
      <ItemDetail product={document}/>
    </Row>
  )
}