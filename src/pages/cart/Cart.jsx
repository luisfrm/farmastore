import { useState } from 'react'
import { getItemsInCart, clearCart, removeItemInCart } from '../../helpers/functions'
import './Cart.scss'

export default function Cart() {

  const [products, setProducts] = useState(getItemsInCart())

  const userLogged = sessionStorage.getItem("userLogged")
  
  const handleVaciarCarrito = () => {
    clearCart()
    window.location.reload()
  }

  const handleFinishCart = () => {
    clearCart()
    setProducts(getItemsInCart())
  }

  const handlerDelete = (e) => {
    const [,id] = e.target.id.split('-')
    removeItemInCart(id)
    setProducts(getItemsInCart)
  }

  return (
    <>
      <div className="container mb-5">
        <div className="row d-flex justify-content-center m-0">
          <div className="col-12 card col-md-8 px-0">
            <div className="row px-2">
              <div className="col-12 text-center py-3">
                <h3>Carrito de compras</h3>
              </div>
            </div>
            <div className="row productData px-0">
              <div className="col-12">
                <ul className="list-group">
                  {
                    products.length > 0 && products.map((item) => {
                      return (
                        <li className="list-group-item" key={item.id}><div className="float-left"><p className="mb-0" ><span className='font-weight-bold'>{item.titulo}</span> - Bs: {item.precio}</p><p className="mb-0">Cantidad: {item.stock}</p></div><div className="float-right"><button className="btn btn-secondary">Actualizar stock</button> <button className="btn btn-danger" id={`product-${item.id}`} onClick={handlerDelete}>Eliminar</button></div></li>
                      )
                    })
                  }
                  {
                    products.length === 0 && (<li className="list-group-item active">Sin productos en el carrito</li>)
                  }
                </ul>
              </div>
                  {products.length > 0 && (<div className="col-12 d-flex justify-content-around py-3">
                    { userLogged && <button className="btn btn-success" data-toggle="modal" data-target="#finishCart">Finalizar compra</button>}
                    <button className="btn btn-danger" data-toggle="modal" data-target="#limpiarCarrito">Vaciar carrito</button>
                  </div>)}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="limpiarCarrito" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Vaciar carrito</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Estas seguro de que deseas vaciar el carrito?</p>
              <p>Perderas todos los productos almacenados hasta ahora.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleVaciarCarrito}>Vaciar carrito</button>
              <button type="button" className="btn btn-light" data-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="finishCart" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Finalizar compra</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="font-weight-bold">Estas seguro de que deseas finalizar la compra?</p>
              <p>Si estas seguro, el producto sera enviada a tu informacion registrada y la persona encargada del delivery procedera a comunicarse via Email / Llamada telefonica / SMS</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={handleFinishCart} data-dismiss="modal" data-toggle="modal" data-target="#cartFinished">Vaciar carrito</button>
              <button type="button" className="btn btn-light" data-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="cartFinished" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Compra finalizada</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="font-weight-bold">Muchas gracias por tu compra</p>
              <p>La persona encargada del delivery procedera a comunicarse via Email / Llamada telefonica / SMS.</p>
              <p>Recuerde que el pago puede realizarse por los siguientes metodos:</p>
              <ul>
                <li><p>Punto de venta</p></li>
                <li><p>Transferencia Banesco Panama</p></li>
                <li><p>Transferencia Banesco</p></li>
                <li><p>Transferencia Bod</p></li>
                <li><p>Pago movil</p></li>
                <li><p>Dolares en efectivo</p></li>
                <li><p>Zelle</p></li>
                <li><p>Bs en efectivo</p></li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
