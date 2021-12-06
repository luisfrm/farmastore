import SidebarFilters from '../../components/SidebarFilters/SidebarFilters'
import ProductList from '../../components/ProductsList/ProductList'
import './inventory.scss'

export default function Inventory({productsInCart, updateInventory}) {
  return (
    <section className="container-fluid mx-0 mb-5">
      <div className="row w-100 mx-0">
        <div id="sidebar" className="d-none d-md-block col-2 mb-5 pr-0">
          <SidebarFilters />
        </div>
        <div className="col-12 col-md-10 pt-2">
          <div id="productList">
            <ProductList updateInventory={updateInventory} productsInCart={productsInCart}/>
          </div>
        </div>
      </div>
    </section>
  )
}
