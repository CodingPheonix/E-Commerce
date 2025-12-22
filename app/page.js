import Hero from "./Components/landing_page/hero";
import Features from "./Components/landing_page/Features";
import Products from "./Components/landing_page/Products";
import Shop_by_category from "./Components/landing_page/Shop_by_category";
import Rating from "./Components/landing_page/Rating";
import Links from "./Components/landing_page/Links";

export default function HomePage() {

  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <Shop_by_category />
      <Rating />
      <Links />
    </main>
  );
}