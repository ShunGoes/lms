import Vid1 from '../../assets/images/vid1.jpg'

interface Props {
  num : number
}
const CourseCard = ({num}:Props ) => {
  return (
    <div className=" lg:h-[10rem] h-[9rem] w-full py-3 flex mb-3">
      <div className="flex w-full  gap-3 lg:gap-4 lg:w-8/12 h-full">
        <div className="w-4/12 lg:w-3/12 h-full  rounded-lg ">
          <img src={Vid1} alt="" className="h-full w-full  object-cover rounded-lg"/>
        </div>
        <div className="w-8/12 lg:w-9/12  h-full flex flex-col gap-1 py-2">
          <p>  learning Web Development  {num}       </p>
          <span className="font-bold text-sm">Brad Traversy</span>
          <small className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tenetur?</small>
        </div>
      </div>
      <div className="w-4/12   items-center hidden lg:flex">
        
        <p className="w-1/2 text-center ">duration</p>
        <p className="w-1/2 text-center ">ratings</p>
      </div>
    </div>
  )
}

export default CourseCard