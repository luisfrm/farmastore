import Ads from "../../components/Ads/Ads";
import PromoCarousel from "../../components/PromoCarousel/PromoCarousel";
import PopularProducts from "../../components/PopularProducts/PopularProducts"

function App() {
  return (
    <section className="w-100 h-100">
      <PromoCarousel />
      <Ads />
      <PopularProducts />
    </section>
  )
}

export default App;