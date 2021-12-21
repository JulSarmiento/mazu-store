import React from "react";

export default function User({name, age, email}) {
  return (
    <>
      <h2>{name}</h2>
      <p>Edad: {age}</p>
      <p>Mail: {email}</p>
    </>
  )
}