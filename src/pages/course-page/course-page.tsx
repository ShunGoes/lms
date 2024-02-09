import { BsSearch } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";

import { CourseData, PdfData } from "../../course-data.js";
import { Products } from "../../types.js";

import LastCourse from "../../components/courses/last.course.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import Videos from "../../components/videos/videos.js";
import Pdf from "../../components/pdf/pdf.js";

interface TabsProp {
  id: number;
  title: string;
  view: Products[];
  data: Products[];
}

type TabsPropArray = TabsProp[];

const tabs: TabsPropArray = [
  {
    id: 0,
    title: "Videos",
    view: CourseData,
    data: CourseData,
  },
  {
    id: 1,
    title: "PDFs",
    view: PdfData,
    data: PdfData,
  },
  {
    id: 2,
    title: "Audio",
    view: CourseData,
    data: CourseData,
  },
];

const CoursePage = () => {
  const [formValue, setFormValue] = useState("");
  const [filteredData, setFilteredData] = useState(tabs[0]);
  const [currentPage, setCurrentPage] = useState(1);

  // pagination goes here
  const post_per_page = 4;
  const number_of_pages = Math.ceil(filteredData.view.length / post_per_page);
  const last_item = currentPage * post_per_page;
  const first_item = last_item - post_per_page;
  const current_items = filteredData.view.slice(first_item, last_item);

  //  handles changes to the search bar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const filter_items = filteredData.data.filter((course) =>
      course.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData({ ...filteredData, view: filter_items });
    setFormValue(value);
  };

  const handleTabClick = (id: number) => {
    setFilteredData(tabs[id]);
  };
  return (
    <section className="">
      <LastCourse />
      <ul className={`flex list-none border-4 gap-[1.5rem] `}>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className="relative cursor-pointer"
          >
            {tab.title}
            {filteredData.id === tab.id && (
              <motion.p
                layoutId="tabs"
                transition={{ duration: 0.2 }}
                className="h-1 w-full bg-blue-500 absolute -bottom-[10px]"
              />
            )}
          </li>
        ))}
      </ul>
      <div className="my-[3rem]">
        <div className="flex flex-col justify-center gap-5 lg:flex-row lg:items-center lg:justify-start lg:gap-[3rem] ">
          <label htmlFor="courses">Select a course </label>
          <div className="flex ">
            <input
              id="courses"
              list="courses-list"
              placeholder="Search course"
              name="course"
              value={formValue}
              onChange={(e) => handleChange(e)}
              className="h-[35px] w-10/12 rounded-l-lg px-3 border-r-0 outline-none border bg-transparent rounded-lg"
            />
            <div className="h-[35px] w-2/12 border flex justify-center items-center rounded-r-lg ">
              <BsSearch />
            </div>
          </div>
          <div className="hidden lg:flex  w-4/12">
            <select
              name="filter"
              id=""
              className="bg-transparent outline-none w-8/12 "
            >
              <option
                value="Price"
                className="bg-black text-white"
                defaultValue="filter"
              >
                FIlter
              </option>
              <option value="Price" className="bg-black text-white">
                Price
              </option>
              <option value="Price" className="bg-black text-white">
                Ratings
              </option>
              <option value="Price" className="bg-black text-white">
                Time
              </option>
            </select>
            <div className="h-[35px] w-2/12 border flex justify-center items-center rounded-r-lg ">
              <IoFilter />
            </div>
          </div>
        </div>
        <div className="max-h-[750px] h-[750px]">
        {filteredData.id === 0 && (
          <Videos
            currentPage={currentPage}
            number_of_pages={number_of_pages}
            currentItems={current_items}
            setCurrentPage={setCurrentPage}
          />
        )}
        {filteredData.id === 1 && (
          <Pdf
            currentItems={current_items}
            number_of_pages={number_of_pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>`
      </div>
     

      {/* Main Course section starts here  */}
    </section>
  );
};

export default CoursePage;
