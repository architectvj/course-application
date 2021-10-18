import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Fragment } from "react/cjs/react.production.min";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";

function AddCourse(){

    useEffect(()=>{
        document.title="Add Course"
    },[]);

    const[course, setCourse] = useState({});
    const handleForm = (e) => {
        console.log(course);
        postDatatoSever(course);
        e.preventDefault();
    }
    
    //post data
    const postDatatoSever = (data) =>{
        axios.post(`${base_url}/courses`, data).then(
            (response) =>{
                console.log(response);
                toast.success("Course added sucessfully!");
            },
            (error) =>{
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    }
    return(
        <Fragment>
            <Form onSubmit={handleForm}> 
            <h3 className="text-center">Fill the form to add course</h3>
                <FormGroup>
                
                    <label for="courseId">Course Id</label>
                    <Input type="text" name="courseId" id="courseId" placeholder="Enter course id" 
                    onChange={(e)=>{
                        setCourse({...course, id: e.target.value});
                    }} />
            
                </FormGroup>

                <FormGroup>
                
                    <label for="courseTitle">Course Title</label>
                    <Input type="text" name="courseTitle" id="courseTitle" placeholder="Enter course title" 
                    onChange={(e)=>{
                        setCourse({...course, title: e.target.value});
                    }} />
                
                </FormGroup>

                <FormGroup>
                    <label for="courseDescription">Course Description</label>
                    <Input type="textarea" name="courseDescription" id="courseDescription" placeholder="Enter course description" 
                    onChange={(e)=>{
                        setCourse({...course, description: e.target.value});
                    }} />
                </FormGroup>
                <Container className="mt-3 text-center">
                    <Button type= "submit" color="primary" outline>Add Course</Button>
                    <Button type="reset" color="dark mx-2" outline>Reset</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
export default AddCourse;