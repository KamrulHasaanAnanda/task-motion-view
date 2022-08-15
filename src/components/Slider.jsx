import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../assets/image/banner-5.png";
import banner2 from "../assets/image/banner-6.png";
import banner3 from "../assets/image/banner-7.png";

// Import Swiper style

function Slider() {
  return (
    <div className="sliders">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div>
            <img
              src={banner1}
              className="d-block w-100"
              alt="..."
              width={400}
              height={400}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={banner2}
              className="d-block w-100"
              alt="..."
              width={400}
              height={400}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={banner3}
              className="d-block w-100"
              alt="..."
              width={400}
              height={400}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
