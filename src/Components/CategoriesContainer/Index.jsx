import React, { useEffect, useState } from "react";

import CategoriesList from "../CategoriesList";

import Categories from "../../Mock/Categories";

export default function CategoriesContainer() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const catPromise = new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve(Categories)
      }, 2000)
    })

    catPromise.then((res) => setCategories(res));
  }, [categories])

  return <CategoriesList categories={categories}/>

}