import React from 'react'
export default function CardSectionComponents({title,description,img}) {
  return (
    <div className="bg-white max-w-sm p-4 shadow-2xl mx-auto px-5">
      <div className='flex space-x-3 py-3'>
        <div className="w-8">
          <img src={img} alt="" />
        </div>
        <div className="">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="">
        <p>{description}</p>
      </div>
    </div>
  );
}
