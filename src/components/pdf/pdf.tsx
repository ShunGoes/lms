import { CoursePropType } from "../../types"
import Pagination from "../pagination/pagination"
import PdfCard from "../pdf-card/pdf-card"


import {AnimatePresence,motion} from 'framer-motion'

const Pdf: React.FC<CoursePropType> = ({
    currentItems,number_of_pages,currentPage,setCurrentPage
}) => {
  return (
    <AnimatePresence>
    <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="h-full  ">
        <div className="lg:flex flex-wrap shrink-0 gap-[0.5rem] justify-between lg:mt-3 mt-9">
            {
                currentItems.map(pdf => <PdfCard   pdf={pdf}/>)
            }
        </div>

    <Pagination currentPage={currentPage} number_of_pages={number_of_pages} setCurrentPage={setCurrentPage} />
    </motion.div>
    </AnimatePresence>
  )
}

export default Pdf