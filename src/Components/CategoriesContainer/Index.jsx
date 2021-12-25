import React, { useEffect, useState } from "react";

import CategoriesList from "../CategoriesList";

import Categories from "../../Mock/Categories";
import Loading from "../Loading";
import { Row } from "react-bootstrap";


/**
 * This component mangae the api information for the product's category
 * @returns categories mapped.
 */
export default function CategoriesContainer() {

  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const catPromise = new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve(Categories);
      }, 2000)
    })

    catPromise.then((res) => {
      setCategories(res);
      setIsLoading(false);
    });
  }, [categories])

  if(isLoading){
    return (
      <Row className="loading-container">
        <Loading message={'Cargando Categorias'}  />
      </Row>
    )
  }
  return (
    <>
      <Row className='container d-flex flex-row mx-auto my-5 '>
        <h2 className='my-5' > CATEGORIAS </h2>
        <CategoriesList categories={categories}/>
      </Row>
    </>

  )
}