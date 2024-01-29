import {Divide} from 'hamburger-react'
import { useState,useRef } from 'react'
import { useClickAway } from 'react-use'
import {motion,AnimatePresence} from 'framer-motion'
import { LINKS } from '../../data'
import { Link } from 'react-router-dom'

const Mobile_Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const ref = useRef(null)
    const routes = ['Home','About']
    useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className='lg:hidden'>
        <Divide toggled={isOpen} toggle={setIsOpen} size={25} />
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
          >
            <ul className="grid gap-2">
              {LINKS.map((route) => {

                return (
                  <Link to={route.link}>
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + route.id / 10,
                    }}
                    key={route.id}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <a
                      onClick={() => setIsOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                      }
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </a>
                  </motion.li>
                  </Link>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Mobile_Navbar