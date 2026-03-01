import HomeAbout from "../component/home/about/Index";
import AboutPopular from "../component/home/aboutPopular/Index";
import Banner from "../component/home/banner/Index";
import HomeServices from "../component/home/services/Index";


const Home = () => {
  return (
    <>
      <Banner />
      <HomeAbout />
      <HomeServices/>
      <AboutPopular/>
    </>
  );
};

export default Home;
