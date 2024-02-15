import Vid1 from '../../assets/images/vid1.jpg'


const NotifsCard = () => {
  return (
    <div className='w-full h-[3rem]  flex gap-2 my-1'>
      <div className="w-[30px] h-[30px] rounded-full ">
          <img src={Vid1} alt="" className="w-full h-full rounded-full" />
      </div>
      <div className="flex flex-col gap-[1px] w-10/12 ">
        <p className="text-[11px] overflow-hidden pl-1 truncate ...">Introducing Design Systemsnnnnmmmmmmmmmmmn</p>
        <small className="text-gray-400 text-[8px]">Lorem ipsum dolor sit.</small>
      </div>
    </div>
  )
}

export default NotifsCard