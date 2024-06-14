import React from 'react'

const ErrorHandler = ({error}) => {
  return (
    <div className='w-full h-[75vh] m-0 p-0 flex flex-col items-center'>
      <img className='mt-4 p-0 h-5/6' src={require("../asset/Search-rafiki.svg").default} alt="" />
      <p className='text-xl text-gray-800'>Snap! {error}.</p>
    </div>
  )
}

export default ErrorHandler