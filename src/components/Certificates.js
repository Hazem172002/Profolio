import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import certificate from '../imgs/cert.png'
import { CONSTATNT } from '../constants/constants'
const Certificates = () => {
    useEffect(()=>{
        AOS.init({duration:CONSTATNT})
       })
  return (
    <div className='mt-20 text-center'>
        <h1 className='my-10 text-3xl font-bold'>Attendances and Certificates</h1>
        <div className='md:w-[80%] w-[90%] rounded-sm shadow-2xl bg-white justify-center mx-auto items-center ' data-aos="zoom-in">
        <img src={certificate} className='md:w-[70%] w-[80%]  py-20 justify-center mx-auto'/>
        </div>
    </div>
  )
}

export default Certificates