import React, { Fragment,useEffect, useState } from 'react'
import {Label,Form, FormGroup, Input, Container, Button} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from 'react-toastify';

//form heading
const AddCourse =()=>{
    useEffect(() =>{
        document.title="Add Project";
       },[]);

       const[project,setproject]=useState({});
       
       //form handler function
       const handleForm=(e)=>{
        console.log(project);
        postDatatoServer(project);
        e.preventDefault();
       };

//creating function to post data on server
const postDatatoServer =(data)=>{
    axios.post(`${base_url}/project`,data).then(
        (response)=>{
          toast.success("Todos created successfully");
        },(error)=>{
          toast.error("something went wrong");
        }
    )
}
return <Fragment>
        <h1 className="text-center my-3">Fill Project Detail</h1>
<Form onSubmit={handleForm}>
      <FormGroup>
        <label htmlFor="title">Project Title</label>
       <Input type="text" placeholder="Enter Title" name="title" id="userId" onChange={(e)=>{setproject({...project,title:e.target.value});}}/>
      </FormGroup>

       <FormGroup>
        <label htmlFor="todos">Todo's Description</label>
        <Input type="text" placeholder="Enter description here" name="todos" id="description" onChange={(e)=>{setproject({...project,todos:e.target.value});}}/>
       </FormGroup>

        <FormGroup>
        <Label htmlFor="date">Due Date</Label>
        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"onChange={(e)=>{setproject({...project,date:e.target.value});}}/>
        </FormGroup>
  
        <Container>
            <Button type ="submit" color="success mr-2">Add Project</Button>
            <Button type="reset" color="warning">Clear</Button>
        </Container>
</Form>
</Fragment>
};
export default AddCourse;