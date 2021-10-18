import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import AddCourse from './course/AddCourse';
import Allcourses from './course/Allcourses';
import Course from './course/Course';
import Header from './header/Header';
import Home from './home/Home';
import Menus from './menus/Menus';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
           <Col md={4}>
              <Menus /> 
            </Col>
           <Col md={8}>
             <Route path="/" component={Home} exact></Route> 
             <Route path="/add-course" component={AddCourse} exact></Route>
             <Route path="/view-course" component={Allcourses} exact></Route>
           </Col>
         </Row>
       </Container>

      </Router>
    </div>
  );
}

export default App;
