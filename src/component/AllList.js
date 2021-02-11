import React, { useState , useEffect} from 'react'
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from 'react-toastify';
import Project from './Project';

const AllList=()=>{
    //for title
    useEffect(() =>{
     document.title="List All Project";
    },[]);

    //function to call server
    const getAllCoursesFromServer =()=>{
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
        getAllCoursesFromServer();
    },[]);

   //setting value in project
    const[project,setprojets]=useState([]);

  //setting value for update
  const updateproject=(id)=>{
    setprojets(project.filter((c)=>c.id !== id));
};

return(
<div> 
    {
      project.length>0? project.map((item)=>(
          <Project key={item.id} project={item} update={updateproject}/>
      )):"No courses"
    }

    </div>
)
}
export default AllList;