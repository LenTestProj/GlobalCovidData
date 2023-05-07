import React from 'react'

const NoContactsFound = () => {
  return (
    <div className='border-2 border-gray-500 flex  lg:w-[60%]'>
      <div className='w-[70%] flex items-center justify-center'>
        <img src={`${require('../../images/cancel.png')}`} alt='' className='w-10 h-10 md:w-[40%] md:h-[70%] '/>
      </div>
      <div className='md:text-2xl'>
          No Contacts Found. <br /> Please add contact form Create Contact Button
      </div>
    </div>
  )
}

export default NoContactsFound
