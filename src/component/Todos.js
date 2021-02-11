import React from 'react';
import {Card,CardText,CardSubtitle, CardBody} from 'reactstrap';
import {Form, FormGroup, Input,Label,Table} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from 'react-toastify';

const Todos=({project})=>{
    const ChangeCourse=(id)=>{
        axios.put(`${base_url}/project/${id}`).then(
            (response)=>{
                toast.success("Status changed");
                window.location.reload();
              },(error)=>{
                toast.error("something went wrong");
              }
        )
        }
return( 
    <Card className="text-center">
      <CardBody>
      <Form>
    <FormGroup check>
    <Label check>
    <Table bordered>
      <thead colSpan={2}>
        <tr>
          <th>Mark Done</th>
          <th>Project Name</th>
          <th>Todo's</th>
          <th>Status</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width={150}><CardText><Input type="checkbox" name="status" onChange={()=>{ChangeCourse(project.id);}}/>{' '}</CardText></td>
          <td width={150}><CardSubtitle>{project.title}</CardSubtitle></td>
          <th scope="row" width={150}><CardText>{project.todos}</CardText></th>
          <th scope="row" width={150}><CardText>{project.status}</CardText></th>
          <td width={150}><CardText>{project.date}</CardText></td>
        </tr>
        </tbody>
        </Table>
        </Label>
            </FormGroup>
            </Form>
        </CardBody>
        </Card>

        
)
}
export default Todos;