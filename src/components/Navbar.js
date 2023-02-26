import React, { useState,useEffect } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

import {BsArrowLeft} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const [isActive,setIsActive]=useState(false)
console.log(window.scrollY)
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY>20?setIsActive(true):setIsActive(false);
      })
    })
  return (
    <div className={`${isActive? 'bg-[var(--blue)]' :'bg-none'} text-[var(--white)] duration-700 flex md:items-center justify-between md:justify-around  pt-2 w-full  fixed z-10 `}>
        <h2 className=' cursor-pointer text-bold text-2xl ml-2 md:m-0'>Hi,Me</h2>
        <div className='hidden md:flex justify-between items-center'>
            <ul className='flex  gap-10 font-bold items-center'>
                <li className='cursor-pointer p-3 rounded-md hover:bg-gray-800 transition duration-300' onClick={()=> window.scroll({top:450})}>About</li>
                <li className='cursor-pointer p-3 rounded-md hover:bg-gray-800 transition duration-300' onClick={()=> window.scroll({top:811})}>Skills</li>
                <li className='cursor-pointer p-3 rounded-md hover:bg-gray-800 transition duration-300' onClick={()=> window.scroll({top:1264})}>Education</li>
                <li className='cursor-pointer p-3 rounded-md hover:bg-gray-800 transition duration-300' onClick={()=> window.scroll({top:1719})}>Exprience</li>
                <li className='cursor-pointer p-3 rounded-md hover:bg-gray-800 transition duration-300' onClick={()=> window.scroll({top:3687})}>Contact</li>
            </ul>
        </div>
        <div className='md:hidden text-white p-1'>
            <GiHamburgerMenu onClick={()=>setNav(true)} size='2.2rem' className='cursor-pointer' />
            <div className={`${nav? 'right-0':'-right-full'} w-[80%] bg-gradient-to-b from-[#0a3816]  to-black  h-full fixed transition-all  duration-700  items-center  bg-[#0a3816] top-0 -right-0 flex flex-col`}>
                <BsArrowLeft onClick={()=>setNav(false)} size='2rem'   className='absolute left-1 top-0 hover:bg-[#376544] p-1 transition duration-300 cursor-pointer'/>
                <ul className='p-10 cursor-pointer w-full '>
                    <li className='p-3  hover:bg-[#376544] rounded-md transition duration-300' onClick={()=> window.scroll({top:450})}>About</li>
                    <li className='p-3  hover:bg-[#376544] rounded-md transition duration-300' onClick={()=> window.scroll({top:1124})}>Skills</li>
                    <li className='p-3 hover:bg-[#376544] rounded-md transition duration-300' onClick={()=> window.scroll({top:1872})}>Education</li>
                    <li className='p-3  hover:bg-[#376544] rounded-md transition duration-300' onClick={()=> window.scroll({top:2507})}>Exprience</li>

                    <li className='p-3  hover:bg-[#376544] rounded-md transition duration-300' onClick={()=> window.scroll({top:4238})}>Contact</li>
                </ul>
                
                <div className='flex gap-2 cursor-pointer'>
                <a href={'https://www.facebook.com/people/Hazem-Gamal/100007871233637/?mibextid=ZbWKwL'}>
<BsFacebook  size='3rem'  className='hover:bg-[#376544]  transition duration-300  p-1 rounded-full'/>

</a>

<a href={'https://github.com/Hazem172002'}>
<AiFillGithub size='3rem' className='hover:bg-[#376544] p-1  transition duration-300  rounded-full'/>

</a>


<a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG62nIr7Me9ZAAAAYaOqy_IddLJbsHP8PvuYS6Z2gZWjY30w2_93V8UXGIn_rkdL5sBUJsm-Jyi-gG8VcCOsB-DqTVxQj0n9dFCwzUVe_ahjsqEyd4PbKVVihOcZ0D3zmmKgLQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhazem-gamal-2a9506243'>
<AiFillLinkedin  size='3rem' className='hover:bg-[#376544] p-1  transition duration-300  rounded-full'/>

</a>

<a href={'https://wa.me/01554048815'}>
<BsWhatsapp  size='3rem' className='hover:bg-[#376544] p-1  transition duration-300  rounded-full'/>

</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar