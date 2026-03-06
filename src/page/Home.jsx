import HomeAbout from "../component/home/about/Index";
import AboutPopular from "../component/home/aboutPopular/Index";
import Banner from "../component/home/banner/Index";
import FeedBack from "../component/home/feedback/Index";
import HomeBlog from "../component/home/homeBlog/Index";
import HomeCategory from "../component/home/homeCategory/Index";
import HomeServices from "../component/home/services/Index";
import Subscribe from "../component/home/subscribe/Index";
import HomeTeam from "../component/home/team/Index";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeAbout />
      <HomeServices />
      <AboutPopular />
      <HomeCategory />
      <HomeTeam />
      <FeedBack/>
      <HomeBlog/>
      <Subscribe/>
    </>
  );
};

export default Home;
