import Boy from "../../assets/images/boy-png.png";
import "./dashboard.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const DashboardPage = () => {
  return (
    <section>
      <header className=" border-[#0000ff] lg:pl-[20px]">
        <h1 className="text-[#0000ff]">Hi Dushane</h1>
        <p className="text-gray-400 mt-1 text-[14px]">
          Welcome to your Learning Management System
        </p>
      </header>

      <Swiper
        spaceBetween={50}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="card-container mt-[2rem] h-[11rem] lg:h-[15rem] border relative lg:mt-[0] "
      >
        <SwiperSlide>
          <div className="h-[20%] hidden lg:block" />
          <div className="h-full lg:h-[80%] bg-[#0000ff] rounded-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="w-[90%]  h-full flex flex-col justify-center  gap-3 lg:w-[80%] lg:items-start lg:text-start lg:gap-2 mx-auto"
            >
              <h2>New Courses added</h2>
              <p className="lg:w-2/5 w-4/5">
                A few courses have been added to the Courses Section for
                javascript{" "}
              </p>
              <button className="border-2 border-black p-2 rounded-lg">
                Check them out
              </button>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-[17rem] hidden  h-full lg:block ">
            <img src={Boy} alt="boy png" className=" boy  " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[20%] hidden lg:block" />
          <div className="h-full lg:h-[80%] bg-[#ff54ff] rounded-lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="w-[80%] mx-auto h-full flex flex-col justify-center text-center gap-3 items-center   lg:w-[80%] lg:items-start lg:text-start lg:gap-2"
            >
              <h2 className="lg:w-2/5">
                Have You Checked The Notifications Channel ? Some Exciting NEws
                Awaits You There
              </h2>
              <button className="border-2 border-black p-2 rounded-lg">
                Check them out
              </button>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-[17rem] hidden  h-full lg:block ">
            <img src={Boy} alt="boy png" className=" boy  " />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default DashboardPage;
