import Boy from '../../assets/images/boy-png.png'
import './dashboard.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const DashboardPage = () => {
  return (
    <section>
      <header className=" border-[#0000ff] lg:pl-[20px]">
        <h1 className="text-[#0000ff]">
          Hi Dushane
        </h1>
        <p className="text-gray-400 mt-1 text-[14px]">Welcome to your Learning Management System</p>
      </header>

      <Swiper
      spaceBetween={50}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, disableOnInteraction: false
      }}
      className="card-container mt-[2rem] h-[11rem] lg:h-[15rem] border relative lg:mt-[0] "
    >
        <SwiperSlide>
          <div className="h-[20%] hidden lg:block"/>
          <div className="h-full lg:h-[80%] bg-[#0000ff] rounded-lg"/>
          <div className='absolute top-0 right-0 w-[17rem] hidden  h-full lg:block '>
            <img src={Boy} alt='boy png' className=' boy  ' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[20%] hidden lg:block"/>
          <div className="h-full lg:h-[80%] bg-[#ff54ff] rounded-lg"/>
          <div className='absolute top-0 right-0 w-[17rem] hidden  h-full lg:block '>
            <img src={Boy} alt='boy png' className=' boy  ' />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default DashboardPage