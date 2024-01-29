import { LINKS } from "../../data";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation_List = () => {
  const [isActive, setIsActive] = useState(0);

  const handleClick = (id: number) => {
    setIsActive(id);
  };
  return (
    <aside>
      { LINKS.map((link) => (
        <Link to={link.link} key={link.id}>
        <motion.div
          layoutId="links"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1 + link.id / 10,
          }}
          className={`${
            isActive === link.id 
              ? " text-blue-700 700 rounded-xl font-extrabold "
              : ""
          } w-full  h-[50px] flex gap-9 items-center px-2 cursor-pointer relative `}
          onClick={() => handleClick(link.id)}
        >
          {link.icon}
            { isActive === link.id && <motion.div layoutId="active-pill" transition={{duration:0.1}} className="bg-blue-400/20 border-r border-r-blue-700~ absolute inset-0 rounded-xl  "/> }
          <div className="w-8/12 relative z-10">{link.title}</div>
        </motion.div>
        </Link>
      ))}
    </aside>
  );
};

export default Navigation_List;
