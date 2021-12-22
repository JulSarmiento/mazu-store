import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

import ItemList from "../ItemList";
//LLamado al api, manejo de estados, traer 1 item list ya mapeado y devuelve como lista

import ProductCollars from "../../Mock/ProductCollars"

export default function ItemListContainer({line}) {
  console.log(useParams());
  // promesa
  // Ponemos un estados porque va a cambiar y actualizar

  const [items, setItems] = useState([]);

  useEffect(() => {

    const itemPromise = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(ProductCollars)
      }, 2000)

    })

    itemPromise.then((res) => {

      if(!!line){
        setItems(res.filter(x => x.slug === line))
      } else{
        setItems(res)
      }
      
      
    }); 
  }, [items]) //useEffect escucha los cambios del array items, y se actualiza a medida que se modifica dicho array.

  return(
    // Enviamos el array de objetos del api al itemList para ser mapeados.
    <ItemList items={items} />
    
  )
}