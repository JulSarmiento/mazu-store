import React, { useEffect, useState } from "react";
import {Nav} from 'react-bootstrap';

import Categories from "../../Mock/Categories";



export default function HeaderLinks() {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const promiseCat = new Promise((res, rej) => {
      res(Categories)
    });

    promiseCat.then((res) => setCategories(res));
  }, []);


  return (
    <>
      {categories.map((categorie) => {
        return (
          <Nav>
            <Nav.Link key={categorie.catId} href={categorie.ruta}  className="mx-3">
              {categorie.nombre}
            </Nav.Link>
            
          </Nav>
        )
      })}  
    </>
  )
}

