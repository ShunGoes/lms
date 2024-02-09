import { Link } from "react-router-dom";

import GoogleIcon from "../../assets/svg/google.svg";
import FacebookLogo from "../../assets/svg/facebook.svg";
import "./sign-in.css";

const SignIn = () => {
  return (
    <section className="section bg-black h-screen  lg:flex justify-center items-center  ">
      <div className="sec-container  h-[18rem] flex flex-col  w-full  items-start gap-[4rem] px-4 py-8 lg:hidden ">
        <h4 className="dash">Dash</h4>
        <h2 className="text-3xl w-7/12 max-w-[20rem] ">
          Sign into your account
        </h2>
      </div>
      <div className="px-4 flex flex-col gap-9  lg:w-3/12 lg:py-2 shadow-lg border">
        <h3>Sign in</h3>
        <form action="" className="flex flex-col gap-[2rem]">
          <div className="flex flex-col gap-4 ">
            <label htmlFor="email " className="font-[400] text-[12px]">
              {" "}
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              required
              autoComplete="on"
              className="border border-[#0000ff] h-[44px] pl-[16px] rounded-md shadow-lg outline-none flex items-center  "
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <label htmlFor="password " className="font-[400] text-[12px]">
              {" "}
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="johndoe@gmail.com"
              required
              autoComplete="on"
              className="border border-[#0000ff] h-[44px] pl-[16px] rounded-md shadow-lg outline-none flex items-center  "
            />
          </div>
          <div>
            <button className="h-[44px]  rounded-md  outline-none flex justify-center items-center bg-[#0000ff] font-[500] text-white text-[16px] border-2 w-full">
              {" "}
              Create Account{" "}
            </button>
            <p className="w-10/12 mx-auto text-center mt-2 lg:w-11/12">
              Don't have an account ?{" "}
              <Link to="/signup" className="text-blue-600">
                Sign up here
              </Link>{" "}
            </p>
          </div>
        </form>

        <div className="hidden gap-4 justify-center items-center w-10/12 mx-auto ">
          <div className=" h-[1px] w-3/5 bg-[#0000ff]" />
          <span> OR</span>
          <div className=" h-[1px] w-3/5 bg-[#0000ff]" />
        </div>

        <div>
          <button className="h-[50px] w-full flex justify-center items-center gap-5  border-2 my-3  rounded-md  outline-none">
            <img
              src={GoogleIcon}
              className="h-3/5 object-cover"
              alt="google icon "
            />{" "}
            <span className="font-[500] text-white text-[16px]">
              {" "}
              Sign in with Google{" "}
            </span>
          </button>
          <button className="h-[50px] w-full flex justify-center gap-5 items-center   border-2   rounded-md  outline-none">
            {" "}
            <img
              src={FacebookLogo}
              className="h-3/5 object-cover"
              alt="facebook icon"
            />{" "}
            <span className="font-[500] text-white text-[16px]">
              {" "}
              Sign in with Facebook{" "}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
