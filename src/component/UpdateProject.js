import React, { Fragment,useEffect, useState } from 'react'
import {Form,Label, FormGroup, Input, Container, Button} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from 'react-toastify';

const UpdateProject =()=>{
    useEffect(() =>{
        document.title="Update Todos";
       },[]);

       const[project,setproject]=useState({});

       //form handler function
       const handleForm=(e)=>{
        UpdateProject(project);
        e.preventDefault();
       };

//creating function to post data on server
const UpdateProject =(data)=>{
    axios.put(`${base_url}/project`,data).then(
        (response)=>{
          toast.success("course updated successfully");
        },(error)=>{
          toast.error("something went wrong");
        }
    )
}

return <Fragment>
        <h1 className="text-center my-3">Update Todo's Detail</h1>

   <Form onSubmit={handleForm}>
   <FormGroup>
        <label htmlFor="id">Project Title</label>
       <Input type="text" placeholder="Enter id" name="id" id="userId" onChange={(e)=>{setproject({...project,id:e.target.value});}}/>
      </FormGroup>

      <FormGroup>
        <label htmlFor="title">Project Title</label>
       <Input type="text" placeholder="Enter Title" name="title" id="userId" onChange={(e)=>{setproject({...project,title:e.target.value});}}/>
      </FormGroup>

       <FormGroup>
        <label htmlFor="todos">Todo's Description</label>
        <Input type="text" placeholder="Enter description here" name="todos" id="description" onChange={(e)=>{setproject({...project,todos:e.target.value});}}/>
       </FormGroup>

        <FormGroup>
        <Label htmlFor="date">Date</Label>
        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"onChange={(e)=>{setproject({...project,date:e.target.value});}}/>
        </FormGroup>
  
        <Container>
            <Button type ="submit" color="success mr-2">Update Todo's</Button>
            <Button type="reset" color="warning">Clear</Button>
        </Container>
</Form>
</Fragment>;
};
export default UpdateProject;