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
import { motion } from "framer-motion";

function Tech() {
  return (
    <div className="tech__container" id="Technologies">
      <div className="slider__container">
        <div className="tech__title">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            Technologies
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            Languages and Frameworks
          </motion.h1>
          <motion.div
            className="tech__desc"
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            <p>
              My journey in software development has been an exciting adventure,
              characterized by continuous growth and acquisition of technical
              skills.
            </p>
          </motion.div>
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
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              375: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              425: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              800: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 0,
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
