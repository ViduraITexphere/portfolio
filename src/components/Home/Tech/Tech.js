import "./Tech.css";
import { IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  SiBootstrap,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
// Import Swiper styles
import "swiper/css";

function Tech() {
  return (
    <div className="tech__container" id="Technologies">
      <div className="slider__container">
        <div className="tech__title">
          <h2>Technologies</h2>
          <h1>Programming Languages and Frameworks</h1>
          <div className="tech__desc">
            <p>
              I'm a UI Designer with 8 years of experience creating engaging
              interfaces for web and mobile applications.
            </p>
          </div>
        </div>
        <div className="tech__slider">
          <Swiper
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={10}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <IoLogoNodejs className="icon" />
              <h3>Node Js</h3>
            </SwiperSlide>
            <SwiperSlide>
              <FaReact className="icon" />
              <h3>React Js</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiRedux className="icon" />
              <h3>Redux</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiJavascript className="icon" />
              <h3>Javascript</h3>
            </SwiperSlide>
            <SwiperSlide>
              <AiOutlineHtml5 className="icon" />
              <h3>HTML</h3>
            </SwiperSlide>
            <SwiperSlide>
              <IoLogoCss3 className="icon" />
              <h3>CSS</h3>
            </SwiperSlide>
            <SwiperSlide>
              <FaPhp className="icon" />
              <h3>PHP</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiExpress className="icon" />
              <h3>Express Js</h3>
            </SwiperSlide>
            <SwiperSlide>
              <DiDotnet className="icon" />
              <h3>.Net</h3>
            </SwiperSlide>
            <SwiperSlide>
              <FaSass className="icon" />
              <h3>Sass</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiSocketdotio className="icon" />
              <h3>Socket.io</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiGraphql className="icon" />
              <h3>GraphQL</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiTypescript className="icon" />
              <h3>TypeScript</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiTailwindcss className="icon" />
              <h3>Tailwind CSS</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiWordpress className="icon" />
              <h3>Wordpress</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiMui className="icon" />
              <h3>Material UI</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiBootstrap className="icon" />
              <h3>Bootstrap</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiMysql className="icon" />
              <h3>MySQL</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiMongodb className="icon" />
              <h3>MongoDB</h3>
            </SwiperSlide>
            <SwiperSlide>
              <SiFirebase className="icon" />
              <h3>Firebase</h3>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Tech;
