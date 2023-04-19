import React from 'react'
import BtnWith from './btn/BtnWith'
import Btn from './btn/Btn'



export default function Hero() {
    return (
        <><><div className='text-center px-20'>
            <h1 className='font-black text-3xl pt-14'>Free template for create your website with <br /> <span className='text-purple-600'>Astro 2.0</span>+ Tailwind CSS</h1>
            <p className='pt-6 mx-96 text-lg'><span>AstroWind</span>is a free, customzable and production-ready template for Astro 2.0 + Tailwind CSS. Situable for Stratups, Small Business, Sass Business Professional Porfolios,Marketing Website,Landing Pages & Blogs.</p>
        </div>
            <div className='pt-7 flex justify-center space-x-6'>
                <BtnWith title='Get template' bgColor='bg-blue-700' />
                <Btn title='Learn more' bgColor='bg-white' />
            </div></>
            <div className='pt-10'>
                <img src="img/1.png" alt="img-hero" />
            </div></>
  )
}
