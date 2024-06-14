import React from 'react'
import {RingLoader} from "react-spinners";

const LoadingHandler = ({loading}) => {
  const color = "#EB3D4A";
  
  return (
    <div className='my-8'>
    <RingLoader color={color} loading={loading} size={50} />
    </div>
  )
}

export default LoadingHandler