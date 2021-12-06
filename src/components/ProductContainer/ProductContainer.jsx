import {goToProduct} from '../../helpers/functions'
import './productContainer.scss'
import { getItemsInCart, addItemInCart } from '../../helpers/functions'

export default function ProductContainer ({ product, productsInCart }) {
  const {id, imagen:url, titulo, marca, precio, stock} = product

  const handleGoToUrl = () => {
    goToProduct(id)
  }

  const handleButton = () => {
    addItemInCart({...product, stock: 1});
    const itemsInCart = getItemsInCart();
    productsInCart[1](itemsInCart.length)
  }

  return (
    <div className="card productItem">
      { url && <div onClick={handleGoToUrl} className="card-img-top text-center"><img className="product-image" src={url} alt="Product"/></div>}
      <div className="card-body">
        { titulo && <h6 className="card-title font-weight-bold">{titulo}</h6> }
        { marca && <p className="card-text"><span className="font-weight-bold">Marca: </span> {marca}</p> }
        { precio && <p className="card-text">Precio: <span className="font-weight-bold">Bs {precio}</span></p> }
        <button className="btn btn-sm btn-primary w-100" onClick={handleButton}>Agregar</button>
      </div>
    </div>
  )
}
