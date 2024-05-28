
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12 mt-[90px]">
            <SectionTitle subHeading={"Popular Items"} heading={"From Our Menu"}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem 
                        item={item} key={item._id}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
