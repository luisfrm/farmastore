import {goToURL} from '../../helpers/functions'
import './productContainer.scss'

export default function ProductContainer ({product}) {
  const {id, url, title, content, productUrl, price} = product

  const handleGoToUrl = () => {
    goToURL(productUrl)
  }

  const handleButton = () => {
    console.log(`Producto con el id ${id} agregado.`);
  }

  return (
    <div className="card productItem">
      { url && <div onClick={handleGoToUrl} className="card-img-top text-center"><img className="product-image" src={url} alt="Product image"/></div>}
      <div className="card-body">
        { title && <h6 className="card-title font-weight-bold">{title}</h6> }
        { content && <p className="card-text">{content}</p> }
        { price && <p className="card-text">Precio: <span className="font-weight-bold">$ {price}</span></p> }
        <button className="btn btn-sm btn-primary w-100" onClick={handleButton}>Agregar</button>
      </div>
    </div>
  )
}
