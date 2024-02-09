import Vid1 from '../../assets/images/vid1.jpg'
import { Products } from '../../types'

type PdfCardProp = {
    pdf: Products
}

const PdfCard: React.FC<PdfCardProp> = ({pdf}) => {
  return (
    <div className="h-[20rem]  flex flex-col lg:w-[25%] flex-wrap shrink-0 border-2 my-5 rounded-lg shadow-lg">
        <div className='h-[50%] w-full'>
            <img src={Vid1} alt="pdf picture" className='object-cover rounded-t-lg h-full w-full' />
        </div>
        <div className='py-2'>
            <h3 className='text-center'>{pdf.title}</h3>
            <p className='text-center text-gray-400'>{pdf.author}</p>
            <p>{pdf.price}</p>
        </div>
    </div>
  )
}

export default PdfCard