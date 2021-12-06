import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from "./pages/index/index";
import AboutUs from "./pages/about-us/about-us";
import ContactUs from "./pages/ContactUs/ContactUs";
import Inventory from "./pages/inventory/Inventory";
import Header from "./components/partials/header/Header";
import Stores from "./pages/stores/Stores"
import Cart from "./pages/cart/Cart"
import Footer from './components/partials/Footer/Footer'
import CartWidget from "./components/widgets/CartWidget/CartWidget";
import Product from './pages/Product/Product'
import Login from "./components/partials/modals/Login/Login";
import ProductModal from "./components/partials/modals/Product/Product";
import { useState } from "react";
import { getItemsInCart } from './helpers/functions'

function App() {
  if (sessionStorage.getItem('cart')===null && sessionStorage.getItem('cart')===null) {
    sessionStorage.setItem('cart', JSON.stringify([]))
  }

  if (sessionStorage.getItem("userLogged")===null) {
    sessionStorage.setItem('userLogged', 'false')
  }

  const itemsInCart = getItemsInCart();
  const productsInCart = useState(itemsInCart.length)

  const updateInventory = useState(0)
  
  return (
    <>
      <Router>
        <Header/>
        <CartWidget productsInCart={productsInCart}/>
        <section>
          <hr/>
          <Switch>
            <Route path="/inventory/:id" render={({match})=>{return <Product productsInCart={productsInCart} idParam={match.params.id} />}}/>
            <Route path="/inventory">
              <Inventory productsInCart={productsInCart} updateInventory={updateInventory} />
            </Route>
            <Route path="/stores">
              <Stores />
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/about-us">
              <AboutUs/>
            </Route>
            <Route path="/contact-us">
              <ContactUs/>
            </Route>
            <Route path="/">
              <Index/>
            </Route>
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </section>
        <Footer />
        <Login/>
        <ProductModal updateInventory={updateInventory} />
      </Router>
    </>
  );
}

export default App;