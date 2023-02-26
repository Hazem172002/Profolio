import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Education = () => {
     
  useEffect(()=>{
    AOS.init({duration:700})
   })
  return (
    <div className='mt-20'>
        <h1 className='mb-5 text-center text-3xl font-bold'>Education</h1>
     
        <div className='flex flex-col md:flex-row w-[90%] shadow-2xl md:w-[80%] mx-auto rounded-md justify-center text-[var(--white)]'>
            
            <div className='bg-[var(--blue)]  p-5 relative flex flex-col rounded-sm  text-center' data-aos="fade-right">
                <div>
                <h1 className='pt-10 mb-5 '>2020 - 2024</h1>
                <h1 className='text-2xl'>Faculty Of Computer Science</h1>
                <h1>Helwan University</h1>
                <h1>Under Graduate(level three)</h1>
                </div>
            </div>
            <div className='bg-white p-5 rounded-sm relative text-gray-700 grow text-left '  data-aos="fade-left">
                <h1 className='md:text-3xl text-2xl mt-3'>Faculty Of Computer Science</h1>
                <h1 className='mb-3 md:text-xl font-bold text-gray-500'>NEW CAIRO ACADEMY, CAIRO, EGYPT</h1>
                <div className='text-xl border-b pb-4 text-gray-500'>Subjects that was taught in university</div>
                <div className='grid grid-cols-2 justify-between'>
                
                        <div className='p-3 border-b'>Software Engineering</div>
                        <div className='p-3 border-b'>Computer Networks</div>
                        <div className='p-3 border-b'>Accounting Principles</div>
                
            
                        <div className='p-3 border-b'>Decision Support Systems</div>
                        <div className='p-3 border-b'>Network Cryptography</div>
                        <div className='p-3 border-b'>System Designs</div>
                  
                </div>
            </div>
  
        </div>
     
    </div>
  )
}

export default Education