import AdItem from "../AdItem/AdItem"
import axios from 'axios'
import "./PopularProducts.scss"
import { useEffect, useState } from "react"


export default function PopularProducts() {

  const [PopularProducts, setPopularProducts] = useState([])

const getProductPopularsReq = async () => {
  return await axios({
    method: 'get',
    url: `http://localhost:5050/products/list/9`,
    timeout: 3000,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res=>res)
}

const getPopularProducts = () => {
  getProductPopularsReq().then(res=>{
    setPopularProducts(res.data)
  })
}

useEffect(() => {
  getPopularProducts()
}, [])


  return (
    <section id="popularProducts" className="row mx-0 d-flex justify-content-center px-4 py-5">
      <h2 className='col-12 text-center mb-4'>Productos populares</h2>
      {
        PopularProducts.length > 0 && PopularProducts.map(({ imagen, id }, index) => {
          return (
            <div className={`col-12 col-md-4 d-flex justify-content-center mb-5 product-${index}`} key={index}>
              <AdItem key={index} idProduct={id} url={imagen}/>
            </div>
          )
        })
      }
    </section>
  )
}
