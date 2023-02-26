import React from 'react'

const SkillCart = ({isScroll,precentage,text}) => {

  return (
    <div>
    <div className='flex justify-between mb-2'>
        <h1>{precentage}</h1>
        <h1>{text}</h1>
    </div>
<div className='w-full relative rounded-md h-[10px] bg-gray-500'>
<div className={`${isScroll?' w-[95%]':'w-0'} h-[10px] absolute  bg-[var(--blue)] rounded-md transition-all duration-1000`}></div>
</div>
    </div>
  )
}

export default SkillCart