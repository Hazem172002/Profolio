import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Expreince = () => {
     
  useEffect(()=>{
    AOS.init({duration:700})
   })
  return (
    <div className='mt-20'>
        <h1 className='mb-5 text-center text-3xl font-bold'>Expreince</h1>
     
        <div className='flex flex-col md:flex-row w-[90%] md:w-[80%] shadow-2xl mx-auto rounded-md justify-center text-[var(--white)]'>
            
        <div className='bg-[var(--blue)] p-5  flex flex-col rounded-sm  text-center' data-aos="fade-right">
                <div>
                <h1 className='pt-10 mb-5 '>Orange Digital Center</h1>
                <h1 className='text-2xl'>BackEnd Delveloper</h1>
                </div>
            </div>
            <div className='bg-white p-5 rounded-sm text-gray-700 grow text-left '  data-aos="fade-left">
                <h1 className='md:text-3xl text-2xl mt-3'>Back-End Delveloper</h1>
                <h1 className='mb-3 ml-3 md:text-xl font-bold text-gray-500'>2 years exprience</h1>
                <div className='grid grid-cols-2'>
                <div className=''>
                <h1 className='mt-2 text-2xl'>NodeJS</h1>
                <div className='ml-8'>
                <h1 className='list-item mt-2'>NestJS</h1>
                <h1 className='list-item'>TypeScript</h1>
                <h1 className='list-item'>JavaScript</h1>
                <h1 className='list-item'>Sql,NoSQL</h1>
                <h1 className='list-item'>Prisma</h1>
                <h1 className='list-item'>TypeORM</h1>
                </div>
                </div>
                <div className=''>
                <h1 className='mt-2 text-2xl'>PHP Laravel</h1>
                <div className='ml-8'>
                <h1 className='list-item mt-2'>PHP</h1>
                <h1 className='list-item'>Laravel</h1>
                <h1 className='list-item'>LiveWire</h1>
           
                </div>
                </div>
                </div>
                       
                <h1 className='text-2xl ml-2 mt-3 mb-2 border-t pt-2 border-gray-300'>Projects</h1>
                  <div className='ml-10 '>
                  <h1 className='list-item'>Movie API</h1>
                  <h1 className='list-item'>ODC API</h1>
                  <h1 className='list-item'>LMS API</h1>
                  <h1 className='list-item'>Dashboard API</h1>
                  <h1 className='list-item'>GYM API</h1>
                  
                </div>
       
         
            </div>
  
        </div>
     
    </div>
  )
}

export default Expreince