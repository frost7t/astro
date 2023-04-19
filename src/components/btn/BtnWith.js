import React from 'react'
import { HiDownload } from "react-icons/hi";
export default function BtnWith({ title, bgColor }) {
  return (
      <button className={`${bgColor} text-white flex font-semibold py-2 px-4 border border-gray-400 rounded-full shadow`}>
        <HiDownload className='mr-2'/>
        {title}
    </button>
  )
}
