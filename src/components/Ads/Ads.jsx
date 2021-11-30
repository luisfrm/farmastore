import AdItem from '../AdItem/AdItem'
import data from "./data.js"
import './Ads.scss'
import '../../helpers/backgrounds.scss';


export default function Ads() {
  const isMobile = window.innerWidth < 981;
  
  if(isMobile){
    return (
      <div id="AdsCarouselMobile" className="carousel slide pt-5" data-ride="carousel">
        <ol className="carousel-indicators">
          {
            data.map(({}, index)=>{
              return <li data-target="#AdsCarouselMobile" data-slide-to={index} key={index} className={index===0  ? 'active' : ''}></li>
            })
          }
        </ol>
        <div className="carousel-inner">
          {
            data.map(({url, title, content, buttonText}, index) => {
              return (
                <div className={`carousel-item ad-${index} ${index===0 ? 'active' : ''}`} key={index}>
                  <AdItem key={index} url={url} title={title} content={content} buttonText={buttonText} />
                </div>
              )
            }) 
          }
        </div>
        <a className="carousel-control-prev" href="#AdsCarouselMobile" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#AdsCarouselMobile" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    )
  } else{
    return (
      <section id="adsSection" className="row bg-gray mx-0 px-4 py-5">
        {
          data.map(({url, title, content, buttonText}, index) => {
            return (
              <div className={`col-12 col-md-4 d-flex justify-content-center ad-${index}`} key={index}>
                <AdItem url={url} title={title} content={content} buttonText={buttonText} />
              </div>)
          })
        }
      </section>
    )
  }
}
