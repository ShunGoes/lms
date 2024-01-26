import Large_Screen_Nnavbar from "./lg-navbar/lg-navbar"
import Mobile_Navbar from "./mobile-navbar"

const Navbar = () => {
  return (
    <nav>
        <div className="h-[70px] w-[90%] mx-auto mt-3 border-4 flex justify-between items-center lg:h-[60px]">
            <h1>DashDAh</h1>
            <Mobile_Navbar />
            <Large_Screen_Nnavbar />
        </div>
    </nav>
  )
}

export default Navbar