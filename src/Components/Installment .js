import {useContext} from 'react'

//Context
import DataContext from "../Context/DataContext"


function Installment() {
    const { vadeSayisi, setVadeSayisi } = useContext(DataContext)
   
    return (
        <div className='mt-10 sm:mt-16 flex flex-col  '>
            <h1 className='font-semibold'>Vade</h1>
            <input type="number" value={vadeSayisi} onChange={(e)=>{setVadeSayisi(e.target.value)}}  placeholder='Vade Sayısı' className='border h-12 p-2 w-28 sm:w-56  my-2 sm:my-5 focus:outline-none ' />
            <input type="range" min="0" max="48" onChange={(e)=>{setVadeSayisi(e.target.value)}} value={vadeSayisi} className='w-80 sm:w-96  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer  ' />
        </div>
    )
}

export default Installment 
