import User from "../../assets/svg/user.png"
import './user-profile.css'


const UserProfile = () => {
  return (
    <section>

    <div className=" h-[15rem] flex flex-col relative  border-4">
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

    <div className="h-[40vh] border-4">
        <h1>
          recent happenings
        </h1>
      </div>
    </section>
  );
};

export default UserProfile;
