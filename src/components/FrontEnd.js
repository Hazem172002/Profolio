import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const FrontEnd = () => {
     
  useEffect(()=>{
    AOS.init({duration:700})
   })
  return (
    <div className='mt-10 pt-5'>

     
        <div className='flex flex-col md:flex-row w-[90%] shadow-2xl md:w-[80%] mx-auto rounded-md justify-center text-[var(--white)]'>
            
        <div className='bg-[var(--blue)] p-5  flex flex-col rounded-sm  text-center' data-aos="fade-right">
                <div>
                <h1 className='pt-10 mb-5 '>Orange Digital Center</h1>
                <h1 className='text-2xl'>Front-End</h1>
                </div>
            </div>
            <div className='bg-white p-5 rounded-sm text-gray-700 grow text-left '  data-aos="fade-left">
                <h1 className='md:text-3xl text-2xl mt-3'>Front-End Delveloper</h1>
                <h1 className='mb-3 ml-3 md:text-xl font-bold text-gray-500'>2 years exprience</h1>
          
                <div className=''>
                <h1 className='mt-2 ml-3 text-2xl'>NodeJS</h1>
                <div className='ml-8'>
                <h1 className='list-item mt-2'>ReactJS</h1>
                <h1 className='list-item'>TypeScript</h1>
                <h1 className='list-item'>JavaScript</h1>
                <h1 className='list-item'>tailwindcss</h1>
                <h1 className='list-item mb-2'>Redux Toolkit Query</h1>
                </div>
                </div>
             
                  <h1 className='text-2xl ml-5 mb-5 border-t border-gray-400 pt-2'>Projects</h1>
                  <div className='ml-10 mt-3'>
                  <h1 className='list-item'>Movie Theater</h1>
                  <h1 className='list-item'>ECommerce</h1>
                  <h1 className='list-item'>Gym</h1>
                  <h1 className='list-item'>LMS</h1>
                </div>
            </div>
  
        </div>
     
    </div>
  )
}

export default FrontEnd