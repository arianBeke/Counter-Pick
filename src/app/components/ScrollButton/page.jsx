import React from 'react'
import {FaArrowUp} from 'react-icons/fa'



export default function ScrollButton() {
  return (
    <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed flex justify-center bottom-10 right-10 z-50 p-3  cursor-pointer rounded-xl w-20 bg-gray-800 ring-[#00df9a] ring-2  hover:ring-white hover:ring-2 hover:text-[#00df9a] duration-300   text-white "
        >
        <FaArrowUp />
    </button>
  )
}
