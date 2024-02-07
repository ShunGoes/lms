import { GrPrevious,GrNext } from "react-icons/gr"


interface PropTypes {
    currentPage: number
    number_of_pages: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
const Pagination = ({setCurrentPage,currentPage,number_of_pages}: PropTypes) => {
    const buttons = []
    for(let i = 1; i <= number_of_pages; i++){
        buttons.push(i)
    }
    const prev = () => {
        currentPage === 1 ? setCurrentPage : setCurrentPage(currentPage - 1)
    }
    const next = () => {
        currentPage === number_of_pages? setCurrentPage(number_of_pages) : setCurrentPage(currentPage + 1) 
    }

  return (
    <div className="">

        <ul className="flex  justify-center items-center gap-4 h-[50px] ">
            <GrPrevious className={`border h-[30px] w-[60px] rounded-lg ${currentPage === 1 && 'hidden'}`} onClick={prev} />
            {
                buttons.map((num: number) => (
                    <li key={num} className=" border px-2 cursor-pointer hover:text-xl hover:border-[#0000ff]" onClick={()=> setCurrentPage(num)}>{num}</li>
                ))
            }
            <GrNext className={`border h-[30px] w-[60px] rounded-lg ${currentPage === number_of_pages && 'hidden'}`} onClick={next}/>
        </ul>

    </div>
  )
}

export default Pagination