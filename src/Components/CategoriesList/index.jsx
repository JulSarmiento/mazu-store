import React from "react";
import Category from "../Category";

export default function CategoriesList({categories}) {
  return categories.map((category) => <Category key={category.catId} category={category}/>)
}