import axios from 'axios'
import { useEffect, useState } from 'react'
import './Products.scss'
import UpdateProduct from '../../components/partials/modals/Product/UpdateProduct'
import { getItemsInCart, addItemInCart } from '../../helpers/functions'

export default function Product({idParam, productsInCart}) {

  const [Product, setProduct] = useState({})
  const userLogged = sessionStorage.getItem('userLogged')

  const getProductData = async (id) => {
    const res = await axios({
      method: 'get',
      url: `http://localhost:5050/products/${id}`,
      timeout: 3000,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      if (err) {
        return err
      }
    })
    return res
  }

  useEffect(() => {
     getProductData(idParam).then((res) => {
      if (res.status===200) {
        setProduct(res.data[0])
      }
    })
  }, [])
  
  const { id, titulo, marca, precio, stock, imagen, idCategoria, categoria} = Product

  const handleButton = () => {
    addItemInCart({...Product, stock: 1});
    const itemsInCart = getItemsInCart();
    productsInCart[1](itemsInCart.length)
  }
  
  return (
    <>
      <div className="container mb-5">
        <div className="row d-flex justify-content-center m-0">
          <div className="col-12 card col-md-8 px-0">
            <div className="row imageProduct px-2">
              <div className="col-12 text-center">
                <img className='Product' src={imagen} alt="Product" />
              </div>
            </div>
            <div className="row productData px-4">
              <div className="col-12 py-2">
                <span className='title'>Titulo: </span>
                <p className='detail d-inline'>{titulo}</p>
              </div>
              <div className="col-12 py-2">
                <span className='title'>Marca: </span>
                <p className='detail d-inline'>{marca}</p>
              </div>
              <div className="col-12 py-2">
                <span className='title'>Precio: </span>
                <p className='detail d-inline'>Bs{precio}</p>
              </div>
              <div className="col-12 py-2">
                <span className='title'>Stock: </span>
                <p className='detail d-inline'>{stock}</p>
              </div>
              <div className="col-12 py-2">
                <span className='title'>Categoria: </span>
                <p className='detail d-inline'>{categoria}</p>
              </div>
              <div className="col-12 py-2">
                <button className="btn btn-primary w-25" onClick={handleButton}>Agregar al carrito</button>
              </div>
              { userLogged === 'true' && (<div className="col-12 pt-2 pb-5">
                <button className="btn btn-pink w-25" data-toggle='modal' data-target='#updateProductModal'>Actualizar producto</button>
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <UpdateProduct setProduct={setProduct} getProductData={getProductData} id={id} titulo={titulo} marca={marca} precio={precio} stock={stock} imagen={imagen} idCategoria={idCategoria} />
    </>
  )
}
