import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero min-h-[550px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          className="hero-content text-center text-neutral-content ff mt-10"
          style={{
            background: "rgba(21, 21, 21, 0.60)",
          }}
        >
          <div className="py-[80px] px-[300px] text-center">
            <h1 className="mb-5 text-[70px] font-extrabold uppercase">
              {title}
            </h1>
            <p className="mb-5 text-xl uppercase font-semibold mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
