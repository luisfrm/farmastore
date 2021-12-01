import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from "./pages/index/index";
import AboutUs from "./pages/about-us/about-us";
import ContactUs from "./pages/contact-us/contact-us";
import Inventory from "./pages/inventory/Inventory";
import Header from "./components/partials/header/Header";
import Stores from "./pages/stores/Stores"
import Cart from "./pages/cart/Cart"
import Footer from './components/partials/Footer/Footer'
import CartWidget from "./components/widgets/CartWidget/CartWidget";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <CartWidget/>
        <section>
          <hr/>
          <Switch>
            <Route path="/inventory">
              <Inventory/>
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
          </Switch>
        </section>
        <Footer />
      </Router>
    </>
  );
}

export default App;