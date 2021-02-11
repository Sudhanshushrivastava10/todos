import React, { useState , useEffect} from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import base_url from "../api/bootapi";
import Todos from './Todos';

const List = () =>{    
        //function to call server
        const getAlltodosFromServer =()=>{
            axios.get(`${base_url}/project`).then(
              (response)=>{
                toast.success("courses has been loaded");
                setprojets(response.data);
              },
              (error)=>{
                  toast.error("something went wrong");
              }
            );
           };
       
           //calling loading course function
           useEffect(()=>{
               getAlltodosFromServer();
           },[]);

           //putting value in const
           const[project,setprojets]=useState([]);
       
    return(
   <div>
    {
      project.length>0? project.map((item)=>(
          <Todos key={item.id} project={item} />
      )):"No Todos"
    }
       </div>
    )
}
export default List;