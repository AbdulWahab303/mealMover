import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Restaurants from "@/components/Restaurants";
import Categories from "@/components/Catergories";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection></HeroSection>
      <div className="container mx-auto px-2 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Popular Cuisines
        </h1>
        <Categories></Categories>
      </div>
      <div className="container mx-auto px-2 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
          Featured Restaurants
        </h1>
        <Restaurants />
      </div>
      <Footer></Footer>
    </>
  );
}
