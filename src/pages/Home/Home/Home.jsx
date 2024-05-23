import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
                <title>Bistro | Home</title>
      </Helmet>
      <div className="">
        <Banner></Banner>
      </div>
      <div className="max-w-5xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
        <Featured></Featured>
        <div className="max-w-5xl mx-auto my-10">
            <Testimonial></Testimonial>
        </div>
    </div>
  );
};

export default Home;
