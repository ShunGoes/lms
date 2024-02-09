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
    <section>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className=" lg:py-2 "
        >
          <div className="flex h-[50px] items-center bg-[#0000ff] text-white  ">
            <h3 className="w-full  lg:w-8/12  text-center  ">Courses</h3>
            <h3 className="w-2/12  text-center hidden lg:block ">Duration</h3>
            <h3 className="w-2/12  text-center hidden lg:block">Ratings</h3>
          </div>
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
