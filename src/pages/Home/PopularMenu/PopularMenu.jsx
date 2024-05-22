import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([])


    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const pop = data.filter(item=> item.category === 'popular')
            setMenu(pop)
        })
    },[])

    return (
        <section className="mb-12 mt-[90px]">
            <SectionTitle subHeading={"Popular Items"} heading={"From Our Menu"}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem 
                        item={item} key={item._id}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
