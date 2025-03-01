import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7
    md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
<h1 className='md:text-home-heading-large text-home-heading-small relative font-bold
text-gray-800 max-w-3xl mx-auto'> Your Learning Journey Starts Here! <br /> Access engaging, flexible, and personalized learning,
    <span className='text-blue-600'> anywhere, anytime.</span> <img src={assets.sketch} alt="sketch" 
    className='md:hiden block absolute -bottom-7 right-0'/></h1>

    <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>At CourseFlex, we empower you to take control of your learning experience. Whether you're studying for a course, preparing for exams, or advancing your skills, our platform provides all the tools you need to succeed, right at your fingertips.

</p>
<p className='md:hidden text-gray-500 max-w-sm mx-auto'>
    At CourseFlex, we empower you to take control of your learning experience. Our platform provides all the tools you need to succeed, right at your fingertips.
</p>
<SearchBar/>
    </div>
  )
}

export default Hero
