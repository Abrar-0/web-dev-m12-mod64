import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import chef from '../../../assets/home/chef-service.jpg'
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {

  return (
    <section>
      <SectionTitle
        subHeading={"From 11:30am to 10:00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        style={{
          // "--swiper-pagination-color": "#FFBA08",
          // "--swiper-pagination-bullet-inactive-color": "#999999",
          // "--swiper-pagination-bullet-inactive-opacity": "1",
          // "--swiper-pagination-bullet-size": "16px",
          // "--swiper-pagination-bullet-horizontal-gap": "6px",
          // '--swiper-pagination-bottom': '-10px',
         }}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-6 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-6 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-6 text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-6 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 mr-6 text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
      <div className="relative">
        <img src={chef} alt="" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-12 px-24 w-5/6 text-center">
          <h3 className="ff font-normal text-5xl">Bistro Boss</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, praesentium, consectetur enim iste repellendus dolores accusamus nesciunt sint, numquam iure laudantium maxime. Doloribus, deserunt. Culpa earum cupiditate rem perferendis quam.</p>
        </div>
      </div>
    </section>
  );
};

export default Category;
