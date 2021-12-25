import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Row } from "react-bootstrap";

import ProductCollar from "../../Mock/ProductCollars";
import Loading from "../Loading";
import ItemDetail from "../ItemDetail";

/**
 * This component manage the view and the call for the api mock information. 
 * 
 * @returns the found object in the items array.
 */
export default function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null)
  const {colId} = useParams();

  useEffect(() => {
    const productPromise = new Promise((resolve) => {
      setIsLoading(true);

      const selectedProduct = ProductCollar.find(x => x.colId === colId)

      setTimeout(() => {
        resolve(selectedProduct);
      }, 2000);
    });

    productPromise.then((res) => {
      if(res){
        setProduct(res);
      }

      
    }).finally(() => {
      setIsLoading(false);
    })
  }, [colId])

  if(isLoading){
    return(
      <Row className="loading-container">
        <Loading message={'Cargando detalles del producto'}  />
      </Row>
    )
  }

  if (!product) {
    return <Row className="loading-container">no existe el producto #{colId}</Row>
  }

  return(
    <Row className=' container d-flex flex-row mx-auto'>
      <h2 className='my-5' >PRODUCTOS</h2>
      <ItemDetail product={product}/>
    </Row>
  )
}