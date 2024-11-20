import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import HerosTwo from "../components/HerosTwo"
import LatestCollection from "../components/LatestCollection"
import NewsletterBox from "../components/NewsletterBox"
import OurPolicy from "../components/OurPolicy"
import ProductsOne from "../components/ProductsOne"
import ProductsTwo from "../components/ProductsTwo"
import ProductThree from "../components/ProductThree"



const Home  = () => {
  return (
    <div>
      <Hero/>
      <ProductThree/>
      <ProductsOne/>
      <ProductsTwo/>
      <HerosTwo/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home 
