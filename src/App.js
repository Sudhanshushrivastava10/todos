import React from "react";
import './App.css';
import {Container, Row,Col} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import AddProject from "./component/AddProject";
import Header from "./component/Header";
import Menus from "./component/Menus";
import {BrowserRouter as Router,Route} from "react-router-dom";
import AllList from "./component/AllList";
import UpdateProject from "./component/UpdateProject";
import List from "./component/List";

function App() {
  return (
<div>
  <Router>
  <ToastContainer />
<Container>
  <Header/>
<Row>
  <Col md={4}>
    <Menus/>
  </Col>
  <Col md={8}>
    <Route path="/create" component={AddProject} exact/>
    <Route path="/list" component={List} exact/>
    <Route path="/view" component={AllList} exact/>
    <Route path="/updateproject" component={UpdateProject} exact/>
  </Col>
  </Row>
</Container>
    </Router>
    
  </div>
  );
}

export default App;