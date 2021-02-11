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
import GithubLogin from 'react-github-login';
import Home from "./component/Home";

function App() {
  const responsegit=(response)=>{
    console.log(response);
    <Home/>
  };
  return (
<div>
  <GithubLogin 
  ClientId="75063ec45a73ff34e039"
  clientSecret="af92b053fb8f19b658f648f25d27e258d8a63072"
  onSuccess={<App/>}
  onFailure={responsegit}/>
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