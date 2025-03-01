import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'
const CourseSection = () => {

    const {allCourses} = useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800"'>
      Learn from the best at Your Own Pace 
      </h2>
      <p className='text-sm md:text-base text-gray-500 mt'>

      Ready to transform your learning experience? With CourseFlex, 
      <br />
      it’s all about giving you the power to learn and succeed on your own terms. 
      <br />
      Join us today and start your journey towards a brighter future!
      </p>

    <div className='grid grid-cols-auto px-4 md:my-16 my-10 gap-4'>
        {allCourses.slice(0, 4).map((course, index)=> <CourseCard key={index} course={course}/> )}
    </div>
      <Link to={'/course-list'} onClick={()=> scrollTo(0,0) }
      className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Our Course Catalog:</Link>
    </div>
  )
}

export default CourseSection
