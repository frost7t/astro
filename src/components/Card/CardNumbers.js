import React from 'react'

export default function CardNumbers({title,subtitle}) {
  return (
    <div>
        <h1 className='font-black text-4xl text-blue-800 uppercase'>{title}</h1>
        <p className='font-medium text-black text-sm  uppercase text-center'>{subtitle}</p>
    </div>
  )
}
