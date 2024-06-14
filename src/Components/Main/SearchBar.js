import React from 'react'
import { motion } from 'framer-motion'

const SearchBar = ({handle, setHandle, searchHandler}) => {
  return (
    <div className="m-auto">
      <label className="block text-gray-700 text-md font-bold my-3" htmlFor="CF Handle">
        <div className='flex items-center'>
      <a href=" " className=" flex items-center w-6 mr-4">
        <img src={require("../../asset/code-forces.svg").default} alt="" />
      </a>
        CF Handle
        </div>
      </label>
      <div className="flex items-center">
        <input className="py-1 px-4" type="text" placeholder="CF Handle"  value={handle} onChange={(e) => setHandle(e.target.value)}/>

        <motion.button
        className="bg-red-500 px-2 rounded-sm text-2xl" onClick={searchHandler}>
          <i className="ri-search-line"></i>
        </motion.button>
      </div>
    </div>
  )
}

export default SearchBar