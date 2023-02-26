import React, { useEffect, useState } from 'react'
import SkillCart from './SkillCart'

const Skills = () => {
 const [isScroll,setIsScroll]=useState(false)
 useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>158?setIsScroll(true):setIsScroll(false);
    })
  })


  return (
    <div className='text-center items-center justify-center flex flex-col mb-15'>
        <h1 className='font-bold text-3xl mt-20 mb-5'>Skills</h1>
        <div className='w-[90%] md:w-[80%] rounded-sm bg-white p-8 shadow-2xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <SkillCart isScroll={isScroll} precentage={'85%'} text="BackEnd" duration={700}/>
    <SkillCart isScroll={isScroll} precentage={'95%'} text="C#"/>
    <SkillCart isScroll={isScroll} precentage={'95%'} text="OBJECT ORIENTED"/>
    <SkillCart isScroll={isScroll} precentage={'95%'} text="DESIGN PATTERN"/>
    <SkillCart isScroll={isScroll} precentage={'95%'} text="RESTFUL APIS"/>
    <SkillCart isScroll={isScroll} precentage={'95%'} text="NodeJS"/>
    <SkillCart isScroll={isScroll} precentage={'95%'} text="NestJS"/>
    <SkillCart isScroll={isScroll} precentage={'95%'} text="ReactJS"/>
    <SkillCart isScroll={isScroll} precentage={'95%'} text="Prisma&TypeORM"/>
    <SkillCart isScroll={isScroll} precentage={'95%'} text="Databases"/>



            </div>
        </div>
    </div>
  )
}

export default Skills