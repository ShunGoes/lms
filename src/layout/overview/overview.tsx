import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/navbar"
import Navigation_List from "../../components/navigation-list/navigation-list"

const Overview = () => {
  return (
    <main>
        <div>
        <Navbar/>
        </div>
        <div className=" lg:grid grid-cols-12 lg:w-[95%] mt-4  lg:mx-auto ">
            <div className="hidden lg:block col-span-2"> 
                <Navigation_List />
            </div>
            <div className="col-span-12 lg:col-span-8  h-[50rem] w-[90%] mx-auto lg:w-full lg:mx-0  "><Outlet /></div>
            <div className="hidden lg:block col-span-2 border-2 border-red-500"> Navigation Component</div>
        </div>
    </main>
  )
}

export default Overview