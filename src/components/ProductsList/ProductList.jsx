import { useEffect, useState } from "react"
import axios from 'axios'
import ProductContainer from "../ProductContainer/ProductContainer"



export default function ProductList({productsInCart, updateInventory}) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    axios({
        method: 'get',
        url: `http://localhost:5050/products`,
        timeout: 3000,
        headers: {
          "Content-Type": "application/json"
        }
    })
    .then(({data}) => {
      setProducts(data)
    })
    .catch((err) => {
      if (err) {
        console.warn(err);
      }
      setProducts([]);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [updateInventory[0]])  

  return (
    <section className="row mx-2 w-100">
      { loading && <h2 className='ml-4'>Cargando productos <div className="spinner-border" role="status"><span className="sr-only">...</span></div></h2>}
      { !loading && <div className="col-12"><h5>{products.length} Productos para mostrar</h5></div> }
      { !loading && products.length===0 && <h2 className='ml-4'>No hay productos en el sistema</h2>}
      {
        !loading && products.length>0 && products.map((product) => {
          return (
            <div className="col-12 col-md-4 mb-3" key={product.id}>
              <ProductContainer productsInCart={productsInCart} product={product}/>
            </div>
          )
        })
      }      
    </section>
  )
}









