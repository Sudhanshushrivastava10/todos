import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
    const[email,setemail]=useState({});

  const  handlechange=(e)=>{
      const{name,value}=e.target;
        this.UseState({[name]:value})
    }

  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" onChange={handlechange}/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" onChange={handlechange} />
      </FormGroup>
      <Button onSubmit={handlechange}>Submit</Button>
    </Form>
  );
}

export default Example;