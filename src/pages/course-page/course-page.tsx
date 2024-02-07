import { BsSearch } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";

import {CourseData} from '../../course-data.js'

import LastCourse from '../../components/courses/last.course.jsx'
import CourseCard from "../../components/courses/courses.card.js";
import Pagination from "../../components/pagination/pagination.js";
import { ChangeEvent, useState } from "react";

const CoursePage = () => {
  const [formValue,setFormValue] = useState('')
  const [filteredData,setFilteredData] = useState(CourseData)
  const [currentPage,setCurrentPage] = useState<number>(1)

  console.log(filteredData)
  
  
  const post_per_page = 4
  const number_of_pages = Math.ceil(filteredData.length / post_per_page)
  const last_item = currentPage * post_per_page
  const first_item = last_item - post_per_page
  const current_items = filteredData.slice(first_item,last_item)
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    const filter_items = CourseData.filter(course => course.title.toLowerCase().includes(value.toLowerCase()))

    setFilteredData(filter_items)
    setFormValue(value)    
  }

  const handleFilterbtn = () => {
    console.log('hello');
    
    const filtered_items = filteredData.sort((a,b) => a.price - b.price)
    setFilteredData(filtered_items)
  }
  return (
    <section className="">
      {/* Most Recent course appears here   */}
     <LastCourse />


      {/* Main Course section starts here  */}
      <div className="my-[3rem]">
        <div className="flex flex-col justify-center gap-5 lg:flex-row lg:items-center lg:justify-start lg:gap-[3rem] ">
          <label htmlFor="courses" >Select a course </label>
          <div className="flex ">
            <input
              id="courses"
              list="courses-list"
              placeholder="Search course"
              name="course"
              value={formValue}
              onChange={handleChange}
              className="h-[35px] w-10/12 rounded-l-lg px-3 border-r-0 outline-none border bg-transparent rounded-lg"
            />
            <div className="h-[35px] w-2/12 border flex justify-center items-center rounded-r-lg ">
              <BsSearch />
            </div>
          </div>
          <div className="hidden lg:flex  w-4/12">
           <select name="filter" id="" className="bg-transparent outline-none w-8/12 ">
            <option value="Price" className="bg-black text-white" defaultValue='filter'>FIlter</option>
            <option value="Price" className="bg-black text-white" onClick={handleFilterbtn}>Price</option>
            <option value="Price" className="bg-black text-white">Ratings</option>
            <option value="Price" className="bg-black text-white">Time</option>
           </select>
            <div className="h-[35px] w-2/12 border flex justify-center items-center rounded-r-lg ">
              <IoFilter />
            </div>
          </div>
          
        </div>
      </div>

      {/* Courses */}

      <div className="max-h-[750px]  ">
        <div className="flex h-[50px] items-center bg-[#0000ff] text-white  ">
          <h3 className="w-full  lg:w-8/12  text-center  ">Courses</h3>
          <h3 className="w-2/12  text-center hidden lg:block ">Duration</h3>
          <h3 className="w-2/12  text-center hidden lg:block">Ratings</h3>
        </div>
        <div className="mt-4">
            {
              current_items.map((course) => <CourseCard course={course}  key={course.id}/>)
            }

        </div>
        
        <div>
          <Pagination  currentPage={currentPage} number_of_pages={number_of_pages}  setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </section>
  );
};

export default CoursePage;
