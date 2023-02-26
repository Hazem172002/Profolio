import React from 'react'

const Contact = () => {
    console.log(window.scrollY)
  return (
    <div className='mt-20 text-center text-[var(--white)]'>

    <div className='w-[100%]  p-10 rounded-sm shadow-2xl bg-[var(--blue)] justify-center mx-auto items-center ' data-aos="zoom-in">
       
        <h1 className='text-2xl font-bold mb-3'>Contact Me</h1>
        
        <h1>Gmail: hazmj05@gamil.com</h1>
        <h1 className='my-2'>phone1: 01554048815</h1>
        <h1>phone2: 01118004179</h1>
  
    </div>
</div>
  )
}

export default Contact