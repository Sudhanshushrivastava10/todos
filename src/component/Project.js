import React from 'react';
import {Card, CardText, CardBody,CardSubtitle, Button,Container,Table} from 'reactstrap';
import axios from "axios";
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const Project=({project,update})=>{

    const deleteCourse=(id)=>{
    axios.delete(`${base_url}/project/${id}`).then(
        (response)=>{
            toast.success("Todo's deleted");
            update(id);
          },(error)=>{
            toast.error("something went wrong");
          }
    )
    }

return( 
    <Card className="text-center">
        <CardBody>
        <Table>
      <thead>
        <tr>
          <th>Todo's Id</th>
          <th>Project Name</th>
          <th>Todo's</th>
          <th>Status</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><CardText>{project.id}</CardText></td>
          <th scope="row"><CardSubtitle>{project.title}</CardSubtitle></th>
          <td><CardText>{project.todos}</CardText></td>
          <td><CardText>{project.status}</CardText></td>
          <td><CardText>{project.date}</CardText></td>
        </tr>
        </tbody>
        </Table>
        <Container>
                <Button color="danger" onClick={()=>{
                    deleteCourse(project.id);
                }}>Delete Todo's</Button>
                <Button color="warning ml-3" tag="a" href="/updateproject">UpdateTodo's</Button>
                </Container>
        </CardBody>
        </Card>
)
}
export default Project;