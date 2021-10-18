import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from 'axios';
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
function Allcourses(){
    useEffect(()=>{
        document.title="All Courses"
    },[])

    //function to call server:
    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                console.log(response);
                setCourses(response.data);
                // toast.success("Data Loaded Successfully",{
                //     position:"bottom-center"
                // });
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }

    //call loading function 
    useEffect(()=>{
        getAllCoursesFromServer();
    },[])

    const[courses, setCourses] = useState([]);
    const updateCourseView = (id)=>{
        setCourses(courses.filter((filterCourse) => filterCourse.id != id));
    }
    return(
        <div>
            {
                courses.length > 0 ? courses.map( (item) => <Course key={item.id} course={item} updateView={updateCourseView} /> ) : "No Courses Available"
            }
        </div>
    )
}
export default Allcourses;