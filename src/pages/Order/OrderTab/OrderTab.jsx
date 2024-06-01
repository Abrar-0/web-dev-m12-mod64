import FoodCard from "../../../components/SectionTitle/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // Function to split items into chunks for each slide
  const chunkItems = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Split items into chunks of 6 for each slide
  const slides = chunkItems(items, 6);
  console.log(slides)
  return (
    <div >
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slideItems, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10">
              {slideItems.map((item) => (
                <FoodCard item={item} key={item._id} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
