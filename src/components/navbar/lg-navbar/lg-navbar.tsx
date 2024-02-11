import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { LiaSunSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { PiTranslateBold } from "react-icons/pi";
import { useContext } from "react";
import {Theme_Context} from '../../../context/theme-context'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Large_Screen_Nnavbar = () => {
    const {toggle_darkmode,darkMode} = useContext(Theme_Context)

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/signin')
    }
  return (
    <div className="hidden lg:flex gap-[4rem] items-center">
        <div className="flex gap-[1rem]">
            <Link to='/'>
                <PiTranslateBold size={20}/>
            </Link>
            <Link to='/dashboard/notification'>
                <HiOutlineMail size={20}/>
            </Link>
            <div>
                <IoSearchOutline size={20}/>
            </div>
            <div>
            { darkMode ? <LiaSunSolid size={25} onClick={toggle_darkmode}/> : <MdOutlineDarkMode size={25} onClick={toggle_darkmode}/> }
            </div>
        </div>
        <div className="flex space-x-4">
            <div className="h-[40px] w-[40px] rounded-full border-2 border-blue-500">
                <img src="" alt=""  className="h-full w-full rounded-full object-cover"/>
            </div>
            <button className="btn" onClick={handleLogout}> Log out</button>
        </div>
    </div>
  )
}

export default Large_Screen_Nnavbar