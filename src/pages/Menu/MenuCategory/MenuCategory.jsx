import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title, coverImg}) => {
    
    return (
        <div className="mb-[50px]">
            {title && <Cover img={coverImg} title={title} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>}
            <div className="max-w-5xl mx-auto my-[50px] grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem 
                        item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="text-center border-b-[3px] rounded-lg border-black pb-3">Order Your Favourite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;
