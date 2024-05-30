import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import cover from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertbg from '../../../assets/menu/dessert-bg.jpeg'
import saladbg from '../../../assets/menu/salad-bg.jpg'
import pizzabg from '../../../assets/menu/pizza-bg.jpg'
import soupbg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const [menu] = useMenu()

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={cover} title={"Our Menu"} subtitle={"Would you like to try a dish"}></Cover>
            <div className="mt-[100px]">
                <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </div>
                <MenuCategory items={dessert} title={"Dessert"} coverImg={dessertbg}></MenuCategory>
                <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzabg}></MenuCategory>
                <MenuCategory items={salad} title={"Salads"} coverImg={saladbg}></MenuCategory>
                <MenuCategory items={soup} title={"Soups"} coverImg={soupbg}></MenuCategory>
        </div>
    );
};

export default Menu;
