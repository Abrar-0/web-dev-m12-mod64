import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import banner from '../../../assets/home/featured.jpg'


const Featured = () => {

    const style = {
        backgroundImage: `linear-gradient(0deg, rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${banner})`,
        backgroundColor: 'lightgray',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    
    return (
        <div style={style} className="bg-fixed py-[100px] text-white">
            <SectionTitle subHeading={"Check it Out"} heading={"From our menu"}></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-[200px] gap-8 ">
                <img src={banner} alt="" className="w-1/2"/>
                <div className="w-1/2">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nemo. Saepe enim sequi voluptatem molestiae unde repellat quae fugit, at animi quis repudiandae magni. Cumque recusandae rem assumenda vero repellat.</p>
                    <button className="border-b-[3px] rounded-lg p-[20px]">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
