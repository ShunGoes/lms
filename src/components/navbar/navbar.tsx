import Large_Screen_Nnavbar from "./lg-navbar/lg-navbar"
import Mobile_Navbar_Icons from "./m-nav-icons"
import Mobile_Navbar from "./mobile-navbar"

const Navbar = () => {
  return (
    <nav>
        <div className="h-[70px] w-[90%] mx-auto mt-3 border-4 border-blue-600 flex justify-between items-center lg:h-[60px] lg:w-[95%]">
            <h1 className="hidden lg:block">DashDAh</h1>
            <Mobile_Navbar />
            <Large_Screen_Nnavbar />
            <Mobile_Navbar_Icons />
        </div>
    </nav>
  )
}

export default Navbar