import User from "../../assets/svg/user.png"
import NotifsCard from "../notifs-card/notifs-card";
import './user-profile.css'


const UserProfile = () => {
  return (
    <section className="flex flex-col justify-between gap-4  h-full p-2">

    <div className=" h-[15rem] flex flex-col relative  ">
      <div className="w-full  bg-[#0000ff] h-full rounded-t-lg" />
      <div className="w-full    h-full" />
      <div className=" absolute w-full h-full  flex flex-col justify-center items-center gap-3">
        <div className="w-32 h-32 rounded-full border-4 border-white">
          <img
            src={User}
            alt="user profile image"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
        <p className="font-bold "> Adana Traore</p>
        <span className="text-[12px] text-gray-400 block mt-1 text-center">Student</span>

        </div>
      </div>
    </div>

    <div className="h-[40vh] flex flex-col justify-between ">
        <p className="font-semibold capitalize">
          recent happenings
        </p>
        <div className=" h-4/5 notifs">

        <NotifsCard />
        <NotifsCard />
        <NotifsCard />
        <NotifsCard />
        <NotifsCard />
        <NotifsCard />
        <NotifsCard />
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
