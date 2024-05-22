
const MenuItem = ({item}) => {

    const {image, recipe, price, name} = item
    
    return (
        <div className="flex space-x-4">
            <img src={image} alt="" className="w-[120px] rounded-r-[200px] rounded-bl-[200px]"/>
            <div>
                <h2 className="uppercase">{name}-------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;
