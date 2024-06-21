import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

function Slider({ data = [] }) {
  return (
    <Swiper
      cssMode
      loop
      navigation
      pagination={{ clickable: true }}
      keyboard
      modules={[Navigation, Pagination, Keyboard, Autoplay]}
      className="w-full h-[calc(100vh-98px)]"
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
    >
      {
        data.map((el, index) => (
          <SwiperSlide key={index}>
            <div
              style={{backgroundImage: `url(${el.image_url})`}}
              className={`
                w-full h-full bg-no-repeat bg-cover bg-center flex flex-col items-center
                justify-center gap-20 relative
              `}
              >
              <div className="absolute inset-0 bg-black opacity-40 z-0" />
              <h2 className="text-5xl text-white w-3/4 text-center font-extrabold z-10">{ el.title }</h2>
              <a 
                className="
                  bg-blue-600 z-10 transition cursor-pointer text-white py-[6px] px-5 rounded-lg
                  font-semibold text-xl hover:bg-primary
                "
                href={el.to}
              >
                Ver más
              </a>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default Slider
