import React from "react";
import Category from "../Category/Index";

export default function CategoriesList({categories}) {
  return categories.map((category) => <Category key={category.catId} category={category}/>)
}