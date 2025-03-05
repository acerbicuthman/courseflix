import {createContext, useEffect, useState} from 'react'
import { dummyCourses } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext() 

export const AppContextProvider = (props) => {


    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses, setAllCourses] =useState([])

    const [isEducator, setisEducator] =useState(true)

    const [enrolledCourses, setenrolledCourses] =useState([])

     //Fetch All Courses
    const fetchAllCourses = async()=>{
        setAllCourses(dummyCourses)
    }

    //Function for calculating average rating of course
    const calculateRating = (course)=> {
        if (course.courseRatings.length === 0){
            return 0;
        }
        let totalRating = 0 
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length 
    }
    //Function to calculate course Chapter Time
     const calculateChapterTime = (chapter)=> {
        let time = 0
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, {units: ['h', 'm']})
     }

     //fUNCTION to calculate Course Duration 
     const calculateCourseDuration = (course) => {
        if (!course || !course.courseContent) return "Invalid course data"; // Basic validation to handle undefined or null course object
    
        let time = 0;
    
        course.courseContent.forEach((chapter) => {
            if (chapter && chapter.chapterContent) { // Check if chapter and chapterContent exist
                chapter.chapterContent.forEach((lecture) => {
                    if (typeof lecture.lectureDuration === 'number' && lecture.lectureDuration > 0) {
                        time += lecture.lectureDuration;
                    }
                });
            }
        });
    
        if (time === 0) return "No lectures found or invalid durations"; // If no valid durations were found
    
        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] });
    };
    
    //  const calculateCourseDuration = (course)=> {
    //     let time = 0

    //     course.courseContent.map((chapter)=> 
    //     chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration))
    //  }

     //Function to calculate to No of lectures in the course
     const calculateNoOfLectures = (course)=>{
        let totalLectures =  0;
        course.courseContent.forEach((chapter)=> {
            if (Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length
            }
        })
        return totalLectures
     }

     //Fetch user Enrolled Courses
     const fetchUserEnrolledCourses = async ()=>{
        setenrolledCourses(dummyCourses)
    }

    useEffect(()=> {
        fetchAllCourses()
        fetchUserEnrolledCourses()
    }, []) 
        const value = {
            currency, allCourses, navigate, calculateRating, 
            isEducator, setisEducator, calculateCourseDuration, calculateNoOfLectures,
            calculateChapterTime, enrolledCourses, fetchUserEnrolledCourses
        } 
    return(
        <AppContext.Provider value={value}>
       {props.children}
       </AppContext.Provider>
    )
       
      

}