import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container,   
} from 'reactstrap';
import base_url from "../api/bootapi";

function Course({course, updateView}){

    const deleteCourse = (id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) =>{
                toast.success("Deleted Sucessfully!");
                updateView(id);
            },
            (error) => {
                toast.error("Something went wrong!");
            }
        )
    }

    return(
        <div>
            <Card>
                <CardBody>
                    <CardSubtitle>{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container >
                        <Button color="danger" outline onClick={()=>{
                            deleteCourse(course.id);
                        }}>Delete</Button>
                        <Button color="warning mx-3" outline>Update</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}
export default Course;