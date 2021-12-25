import React, { useEffect, useState } from "react";
import {Row} from "react-bootstrap";
import {useParams} from "react-router-dom";

import ItemList from "../ItemList";
import Loading from "../Loading";
import ProductCollars from "../../Mock/ProductCollars"

/**
 * This component manage the logic and the call for the api mock. 
 * @returns the object's array
 */
export default function ItemListContainer() {
  console.log(useParams());

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {line} = useParams();

  useEffect(() => {

    const itemPromise = new Promise((resolve, reject) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(ProductCollars);
      }, 2000);

    })

    itemPromise.then((res) => {

      if(!!line){
        setItems(res.filter(x => x.slug === line));
      } else{
        setItems(res);
      }
      
      
    }).finally(() => {
      setIsLoading(false);
    })
  }, [ line]); 

  if(isLoading){
    return(
      <Row className="loading-container">
        <Loading message={'Cargando Productos'}  />
      </Row>
    )
  }

  if(items.length === 0){
    return (
      <Row className="container ">
        <p className="text-center">No existen productos para la categoria {items.line}</p>
      </Row>
    )
  }
  
  return(
    // Enviamos el array de objetos del api al itemList para ser mapeados.
    <Row className=' container d-flex flex-row mx-auto'>
      <h2 className='my-5' >PRODUCTOS</h2>
      <ItemList items={items} />
    </Row>
    
    
  )
}