import React from "react";
import {Button, Card, CardBody} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header(){
    const btnHandle = () => {
        toast.success("You Clicked!",{
            position:"bottom-center"
        });
    }
    return(
        <div>
            <Card className="my-2 bg-light"> 
                <CardBody>
                    <h2 className="text-center my-3">Welcome to Courses Application</h2>
                </CardBody>
            </Card>
            
        </div>
    );
}
export default Header;