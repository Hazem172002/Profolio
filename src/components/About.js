import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {RiComputerFill} from 'react-icons/ri'
import { CONSTATNT } from '../constants/constants'
const About = () => {
   
  useEffect(()=>{
    AOS.init({duration:CONSTATNT})
   })
  return (
   <div className='bg-white mt-20 justify-center mx-auto  md:w-[80%] w-[90%] p-3 rounded-md md:grid md:grid-cols-2 flex flex-col gap-10 md:justify-between shadow-xl' data-aos="flip-up">
    <div className='flex flex-col gap-2 p-2'>
      <h1 className='font-bold text-2xl'>About Me</h1>
      <p className='text-gray-600 mt-3'>Ambitious challenger with a practical and concentrated experience in software development. I am always trying hardly to improve my 
        technical skills through doing my tasks with most short, functional and clean code in order to own my unique value that qualifies me to get more engaged in more unique software tasks in order to develop and
         maintain software systems & products that introduce real business solutions.</p>
    </div>
    <div className='flex flex-col gap-2 p-2'>
      <h1 className='font-bold text-2xl mb-3'>Basic Information</h1>
      <div className='grid grid-cols-2'>
        <div className='font-semibold flex flex-col gap-4'>
          <h1>DATE OF BIRTH:</h1>
          <h1>EMAIL:</h1>
          <h1>PHONE:</h1>
          <h1>ADDRESS:</h1>
          <h1>LANGUAGE:</h1>
        </div>
        <div className='text-gray-600  flex flex-col gap-4'>
          <p>1st July, 2002</p>
          <p>hazmj05@gmail.com</p>
          <p>+201554048815</p>
          <p>Cairo Egypt.</p>
          <p>Arabic, English</p>
        </div>
      </div>
    </div>
   </div>
  )
} 

export default About