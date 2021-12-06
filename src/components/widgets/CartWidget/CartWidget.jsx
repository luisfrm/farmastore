import '@fortawesome/fontawesome-free/css/all.min.css'
import "./CartWidget.scss"

export default function CartWidget({productsInCart}) {
  return (
    <div id="cartWidget" className="badge" onClick={() => {window.open('/cart', '_self')}}>
      <i className="fas fa-shopping-cart"></i><span className="ml-2">{productsInCart[0]}</span>
    </div>
  )
}
