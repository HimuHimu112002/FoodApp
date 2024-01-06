import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import NavMenu from "./components/NavMenu"
import ProductSlide from "./components/ProductSlide"
import RecomendedProduct from "./components/RecomendedProduct"
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop smooth/>
      <NavMenu/>
      <HeroSection/>
      <ProductSlide/>
      <RecomendedProduct/>
      <Footer/>
    </>
  )
}

export default App
