import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='items-center justify-center mx-auto mt-10 pb-10 text-center'>
          <div className='flex gap-2 cursor-pointer items-center justify-center mx-auto'>
    <BsFacebook  size='2.5rem' color='gray' className='hover:bg-[var(--blue)] p-1 rounded-md'/>
    <AiFillGithub size='2.5rem' color='gray' className='hover:bg-[var(--blue)] p-1 rounded-md'/>
    <AiFillLinkedin size="2.5rem" color='gray' className='hover:bg-[var(--blue)] p-1 rounded-md'/>
</div>
<p className='mt-3'>© All rights reserved.</p>
    </div>

  )
}

export default Footer