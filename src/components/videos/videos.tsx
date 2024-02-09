// Relative imports
import CourseCard from "../courses/courses.card";
import { CoursePropType } from "../../types"
import Pagination from "../pagination/pagination";

import { motion, AnimatePresence } from "framer-motion";



const Videos: React.FC<CoursePropType> = ({
  currentItems,
  currentPage,
  setCurrentPage,
  number_of_pages,
}) => {
  return (
    <section className="cursor-pointer">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className=" lg:py-2 "
        >
          
          <div className="mt-4">
            {currentItems.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>

          <div>
            <Pagination
              currentPage={currentPage}
              number_of_pages={number_of_pages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Videos;
