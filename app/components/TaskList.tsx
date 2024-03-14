"use client"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Task from "./Task";






    export default  function Tasks(id:any) {
      const [tasks,setTasks]=useState([])

   

    useEffect(() => {
      const fetchTasks = () => {
        fetch(`api/tasks`, {
          // Add your fetch options here
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch items');
            }
            return response.json();
          })
          .then((data) => {
            setTasks(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            toast.error('Error fetching data this time');
          });
      };
  
      fetchTasks();
      console.log(tasks)
    }, [id]);

    
        
        

        return(
            <div>
               
                {tasks.map((task:any)=>(
                  <Task key={task.id} title={task.title} id={task.id} description={task.description} completed={task.completed} dueDate={task.dueDate} priority={task.priority} createdAt={task.createdAt}/>
                ))

                }
                
                            
            </div>
        )
        
    }

    