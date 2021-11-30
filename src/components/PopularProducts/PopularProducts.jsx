import AdItem from "../AdItem/AdItem"
import data from "./data.js"
import "./PopularProducts.scss"


export default function PopularProducts() {
  return (
    <section id="popularProducts" className="row mx-0 d-flex justify-content-center px-4 py-5">
      <h2 className='col-12 text-center mb-4'>Productos populares</h2>
      {
        data.map(({url, title, content, buttonText}, index) => {
          return (
            <div className={`col-12 col-md-4 d-flex justify-content-center mb-5 product-${index}`} key={index}>
              <AdItem key={index} url={url} title={title} content={content} buttonText={buttonText} />
            </div>
          )
        })
      }
    </section>
  )
}
