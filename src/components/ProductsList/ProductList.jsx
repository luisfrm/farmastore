import ProductContainer from "../ProductContainer/ProductContainer"
import data from "./data.js"

export default function ProductList() {
  return (
    <section className="row w-100">
      {
        data.map((product) => {
          return (
            <div className="col-12 col-md-4 mb-3" key={product.id}>
              <ProductContainer product={product}/>
            </div>
          )
        })
      }
    </section>
  )
}
