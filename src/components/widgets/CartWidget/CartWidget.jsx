import '@fortawesome/fontawesome-free/css/all.min.css'
import "./CartWidget.scss"

export default function CartWidget() {
  return (
    <div id="cartWidget" className="badge">
      <i className="fas fa-shopping-cart"></i><span className="ml-2">2</span>
    </div>
  )
}
