import React from 'react'
import { dataStep } from '../data/dataCardsStep';
import  CardStep  from './Card/CardStep';
export default function SectionStep() {
  return (
    <>
      <div className="flex justify-center px-20 py-20">
        <div className='w-1/2'>
          <h2 className='font-bold text-2xl pb-6'>Get your dream website up and running in no time with Astroid </h2>
          <div className="">
            {dataStep.map((item,index) => (
                <CardStep
            key={index}
            icon={item.icon}
            title ={item.title}
            step={item.step}
            text = {item.text}
             />
            ))}
          </div>
        </div>
        <div className="">
            <img src="img/4.jpg" alt="image" className="w-full max-h-[65vh]" />
        </div>
      </div>
    </>
  );
}
