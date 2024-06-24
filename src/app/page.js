import Banner from "@/components/Banner/page";
import Cards from "@/components/Cards/page";
import Contact from "@/components/Contact/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Cards />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
