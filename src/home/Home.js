import React, { useEffect } from "react";
import { Jumbotron, Container, Button } from "reactstrap";
function Home() {
    useEffect(()=>{
        document.title="Home"
    },[])
    return(
        <div>
                <Jumbotron className="text-center bg-light">
                
                <p>This is developed for learning purpose. It's backend is developed on spring boot and front end on React JS</p>
                <Container>
                    <Button color="primary" outline>Start Using</Button> <br/>
                </Container> <br></br>
                
                </Jumbotron>
        </div>
    )
}
export default Home;