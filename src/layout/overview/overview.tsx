import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/navbar"
import Navigation_List from "../../components/navigation-list/navigation-list"
import UserProfile from "../../components/user-profile/user.profile"

import './overflow.css'

const Overview = () => {
  return (
    <main className="h-screen  lg:h-screen">
        <div>
        <Navbar/>
        </div>
        <div className=" lg:grid grid-cols-12 lg:w-[95%] mt-4  lg:mx-auto ">
            <div className="hidden lg:block col-span-2"> 
                <Navigation_List />
            </div>
            <div className="col-span-12 lg:col-span-8  outlet  w-[90%] mx-auto lg:w-full lg:mx-0  lg:px-[1rem] "><Outlet /></div>
            <div className="hidden lg:block col-span-2 "> <UserProfile /> </div>
        </div>
    </main>
  )
}

export default Overview