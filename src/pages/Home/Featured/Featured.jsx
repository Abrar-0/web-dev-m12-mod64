import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import banner from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div>
            <SectionTitle subHeading={"Check it Out"} heading={"From our menu"}></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16 gap-8">
                <img src={banner} alt="" />
                <div>
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nemo. Saepe enim sequi voluptatem molestiae unde repellat quae fugit, at animi quis repudiandae magni. Cumque recusandae rem assumenda vero repellat.</p>
                    <button className="btn btn-outline">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
