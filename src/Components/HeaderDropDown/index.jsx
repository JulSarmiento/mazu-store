import React, { useEffect, useState } from "react";
import { NavDropdown } from 'react-bootstrap';
import UserCategories from "../../Mock/UserCategories"


export default function HeaderDropdown() {

  const [userCategories, setUserCategories] = useState([]);
  useEffect(() => {
    const promiseUserCat = new Promise((res, rej) => {
      res(UserCategories)
    });

    promiseUserCat.then((res) => setUserCategories(res));
  }, []);

  return (
    <>
      {userCategories.map((userCategorie) => (
        <NavDropdown.Item key={userCategorie.catId} href={userCategorie.ruta}>{userCategorie.nombre}</NavDropdown.Item>
      )) }
    </>

  )

}

