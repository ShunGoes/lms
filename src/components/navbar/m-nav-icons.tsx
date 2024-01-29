import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { LiaSunSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { useContext } from "react";
import {Theme_Context} from '../../context/theme-context'
import { Link } from "react-router-dom";



const Mobile_Navbar_Icons = () => {
    const {toggle_darkmode,darkMode} = useContext(Theme_Context)
  return (
    <div className="lg:hidden dark:border-4" >
        <div className="flex gap-[1rem]">
            <div>
              <Link to='/dashboard/notification'>
                <HiOutlineMail size={25}/>
                </Link>
            </div>
            <div>
                <IoSearchOutline size={25}/>
            </div>
            <div>
              { darkMode ? <LiaSunSolid size={25} onClick={toggle_darkmode}/> : <MdOutlineDarkMode size={25} onClick={toggle_darkmode}/> }
            </div>
        </div>
    </div>
  )
}

export default Mobile_Navbar_Icons