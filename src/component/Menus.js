import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus = () =>{    
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/create" action>
             Create Project
            </ListGroupItem>
            <ListGroupItem tag="a" href="/list" action>
             List All Todo's
            </ListGroupItem>
            <ListGroupItem tag="a" href="/view" action>
             View Project
            </ListGroupItem>
        </ListGroup>
    )
}
export default Menus;