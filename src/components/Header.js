import React, { useState, useEffect } from 'react'
import hazemImg from '../imgs/hazem-white.jpg'
import header from '../imgs/intro.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })
  //https://drive.google.com/file/d/1VuImuntXVA4qH_WwqExFTnG3MsMgEvwC/view?usp=sharing
  return (
    <div>
      <div className='bg-gradient-to-b from-[#0a3816] to-[var(--blue)]  items-center text-center flex flex-col pt-20 h-[450px]  w-full relative bg-[var(--blue)] text-[var(--white)] '>

        <img src={header} className='w-full  h-full absolute top-0 object-cover mix-blend-overlay' />
        <div className='w-[50px] h-[50px] animate-ping rounded-full bg-[var(--blue)] absolute top-13'>
        </div>
        <img src={hazemImg} className='max-w-[100px] cursor-pointer  hover:scale-[1.1]  transition-all duration-300 relative rounded-full' />
        <h1 className='font-bold text-2xl md:text-3xl my-2 ' data-aos="fade-right">Hazem Gamal</h1>
        <h1 className='text-2xl md:text-3xl' data-aos="fade-left">Full Stack Delveloper</h1>
        <div className='flex gap-3 mt-2 relative'>
          <button className='py-2 px-10 hover:bg-[var(--blue-bg)]  bg-[var(--blue)] transition duration-300' onClick={() => window.scroll({ top: 4238 })}> Hire Me</button>
          <button className='py-2  px-5 hover:bg-[var(--blue-bg)] bg-[var(--blue)] transition duration-300'><a href={'https://docs.google.com/document/d/1hA8Rla4KUyzIOMdExPfmBsWwA2LQqIZf/edit?usp=sharing&ouid=117641079580489933347&rtpof=true&sd=true'}>Download CV</a></button>
        </div>
        <div className='mt-11 grid  gap-3 grid-flow-col cursor-pointer relative'>
          <a href={'https://www.facebook.com/people/Hazem-Gamal/100007871233637/?mibextid=ZbWKwL'}>
            <BsFacebook size='3rem' className='hover:bg-gray-700 bg-[var(--blue)] transition duration-300  p-1 rounded-full' />

          </a>

          <a href={'https://github.com/Hazem172002'}>
            <AiFillGithub size='3rem' className='hover:bg-gray-700 p-1 bg-[var(--blue)] transition duration-300  rounded-full' />

          </a>


          <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG62nIr7Me9ZAAAAYaOqy_IddLJbsHP8PvuYS6Z2gZWjY30w2_93V8UXGIn_rkdL5sBUJsm-Jyi-gG8VcCOsB-DqTVxQj0n9dFCwzUVe_ahjsqEyd4PbKVVihOcZ0D3zmmKgLQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhazem-gamal-2a9506243'>
            <AiFillLinkedin size='3rem' className='hover:bg-gray-700 p-1 bg-[var(--blue)] transition duration-300  rounded-full' />

          </a>

          <a href={'https://wa.me/01554048815'}>
            <BsWhatsapp size='3rem' className='hover:bg-gray-700 p-1 bg-[var(--blue)] transition duration-300  rounded-full' />

          </a>
        </div>
      </div>
    </div>

  )
}

export default Header