import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-5xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
