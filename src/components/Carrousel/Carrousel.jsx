import React from 'react';
import './Carrousel.css';
import img1 from './../../imagenes/img-1.jpg'
import img2 from './../../imagenes/img-2.webp'
import img3 from './../../imagenes/img-3.webp'


export default function Carrousel() {
    return (
        <section id="carrousel-section">
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="1" />
              </div>
              <div class="carousel-item active">
                <img src={img2} class="d-block w-100" alt="2" />
              </div>
              <div class="carousel-item active">
                <img src={img3} class="d-block w-100" alt="3" />
              </div>
            </div>
        </div>
        </section>
    )
}
