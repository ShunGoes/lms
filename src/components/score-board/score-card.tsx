import Vid1 from "../../assets/images/vid1.jpg";

const ScoreCard = () => {
  return (
    <div className="w-[90%] mx-auto h-[3.5rem]  flex gap-2 my-4  items-center">
      <div className="w-1/12 h-[30px] rounded-full ">
        <img src={Vid1} alt="" className="w-full h-full rounded-full" />
      </div>
      <div className=" w-5/12 ">
        <p className="text-[14px] overflow-hidden pl-1 truncate ...">
          Introducing Design Systemsnnnnmmmmmmmmmmmn
        </p>

      </div>
      <div className="w-2/12 h-full flex justify-center items-center">
            <span>43.81%</span>
      </div>
      <div className="w-3/12 border rounded-lg h-3/5 bg-green-200">
        <p className="  "> plus</p>
      </div>
    </div>
  );
};

export default ScoreCard;
