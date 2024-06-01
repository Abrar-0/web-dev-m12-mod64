

const FoodCard = ({item}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={item.image}
          alt="Shoes"
        />
      </figure>
      <p className=" absolute right-0 mr-3 mt-3 py-1 px-2 bg-black text-white font-medium text-base">${item.price}</p>
      <div className="card-body">
        <h2 className="text-center text-[#151515] font-semibold text-[24px]">{item.name}</h2>
        <p className="text-center text-[#737373] text-base pb-8">{item.recipe}</p>
        <div className="card-action text-center">
          <button className="border-b-[3px] border-[#BB8506] rounded-lg p-[20px] text-[#BB8506] bg-[#E8E8E8] px-8 py-5 uppercase hover:bg-[#111827]">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
