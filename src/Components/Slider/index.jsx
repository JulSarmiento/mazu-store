import React from "react";
import { Carousel } from "react-bootstrap";

import "./index.css";

/**
 * This is the slider component 
 * @returns slider
 */
export default function Slider(){
  return(

    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 banner__picture"
          src="https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/banners%2Fbanner-principal.png?alt=media&token=066ce0c7-6deb-4919-aad1-9da9eda86ffa"
          alt="Banner de presentacion"
          loading="lazy"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 banner__picture"
          src="https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/banners%2Fbanner-collars.png?alt=media&token=e91571a8-429a-4196-86e7-6e858f164ed7"
          alt="Banner de Collares "
          loading="lazy"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 banner__picture"
          src="https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/banners%2Fbanner-collars.png?alt=media&token=e91571a8-429a-4196-86e7-6e858f164ed7"
          alt="Banner de Placas"
          loading="lazy"
        />
      </Carousel.Item>

    </Carousel>
  )
}