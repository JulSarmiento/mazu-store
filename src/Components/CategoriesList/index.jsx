import React from "react";
import Category from "../Category";

/**
 * This component map the categorie's array
 * @param {array} categories array 
 * @returns the categorie's array mapped
 */
export default function CategoriesList({categories}) {
  return categories.map((category) => <Category key={category.catId} category={category}/>)
}