import Vidi from '../../assets/images/vid1.jpg'

const LastCourse = () => {
  return (
    <div>
    <div className="mt-[2rem] lg:mt-0">
      <h3>Professional Development and Training </h3>
      <span className="text-[12px] text-gray-400  ">
        Home / Courses / Professional Development and Training{" "}
      </span>
    </div>
    <div className=" mt-[2rem]  lg:flex justify-between gap-4  shadow-lg">
      <div>
        <div className=" w-full h-[10rem] rounded-lg mx-auto lg:w-[17rem] lg:h-[12rem] border ">
          <img
            src={Vidi}
            alt="Professional Development and Training"
            className="w-full rounded-lg h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] mt-[2rem] lg:gap-[0.5rem] lg:mt-0">
        <h3> Professional Development and Training </h3>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          eveniet eaque voluptate porro facilis ullam rem soluta itaque
          voluptatum repellat, perferendis dolore obcaecati. Esse hic
          tempore consectetur repudiandae praesentium dignissimos blanditiis
          quas, ipsam reiciendis mollitia id, ex ab? Quibusdam voluptatem
          mollitia ipsa ea aut velit iste accusamus ipsum.
        </p>
        <div className=" lg:mt-4 flex  gap-[2rem]">
          <div>
            <p className="font-semibold text-[15px] text-gray-400">
              2 days ago
            </p>
            <span className="text-[12px]  italic ">Last seen </span>
          </div>
          <div>
            <p className="font-semibold text-[15px] text-gray-400">
              2 days ago
            </p>
            <span className="text-[12px]  italic ">Last seen </span>
          </div>
          <div>
            <p className="font-semibold text-[15px] text-gray-400">
              2 days ago
            </p>
            <span className="text-[12px]  italic ">Last seen </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default LastCourse