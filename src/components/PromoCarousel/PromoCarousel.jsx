import React from 'react'
import './PromoCarousel.scss'
import PromoData from "./PromoData.js"

export default function PromoCarousel() {
  return (
    <div id="PromoCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {
          PromoData.map(({}, index)=>{
            return <li data-target="#PromoCarousel" data-slide-to={index} key={index} className={index===0  ? 'active' : ''}></li>
          })
        }
      </ol>
      <div className="carousel-inner">
        {
          PromoData.map((slide, index) => {

            return (
              <div className={`carousel-item ${index===0 ? 'active' : ''}`} key={index}>
                <img className="d-block w-100" src={slide} alt={`Slide ${index}`}/>
              </div>
            )
          }) 
        }
      </div>
      <a className="carousel-control-prev" href="#PromoCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#PromoCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  )
}
