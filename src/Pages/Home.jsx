import Carousel from "../Component/Calousel";
import Header from "../Component/Header";
import Pricing from "../Component/Pricing_Table";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel Display="movie" />
      <Carousel Display="tv" />
      <Pricing />
    </>
  );
};

export default Home;
