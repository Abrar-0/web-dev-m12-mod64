import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import cover from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={cover} title={"Our Menu"} subtitle={"Would you like to try a dish"}></Cover>
            <div className="max-w-5xl mx-auto">
                <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Menu;
