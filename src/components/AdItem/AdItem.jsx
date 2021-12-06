import './AdItem.scss'
import { goToProduct } from '../../helpers/functions'

export default function AdItem({url, title, content, idProduct, buttonText}) {

  const handleOnClick = () => {
    goToProduct(idProduct)
  }

  return (
    <div className="card AdItem">
      { idProduct && url && <img onClick={handleOnClick} src={url} alt="Ad image" className="card-img-top"/> }
      { !idProduct && url && <img src={url} alt="Ad image" className="card-img-top"/> }
      <div className="card-body">
        { title && <h5 className="card-title">{title}</h5> }
        { content && <p className="card-text">{content}</p> }
        { buttonText && <button className="btn btn-primary">{buttonText}</button> }
      </div>
    </div>
  )
}
